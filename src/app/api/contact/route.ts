import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, type, message } = await req.json();

  await resend.emails.send({
    from: "Project Enquiry <onboarding@resend.dev>",
    to: "virendra.shekhawat9768@gmail.com",
    subject: `New enquiry from ${name} — ${type || "General"}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "—"}</p>
      <p><strong>Project type:</strong> ${type || "—"}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  });

  return Response.json({ ok: true });
}