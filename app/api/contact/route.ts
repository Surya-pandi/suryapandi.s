import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

type ContactPayload = { name?: unknown; email?: unknown; project_type?: unknown; message?: unknown; website?: unknown };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const value = (input: unknown) => typeof input === "string" ? input.trim() : "";

export async function POST(request: Request) {
  try {
    const body = await request.json() as ContactPayload;
    if (value(body.website)) return NextResponse.json({ ok: true });
    const name = value(body.name);
    const email = value(body.email).toLowerCase();
    const projectType = value(body.project_type);
    const message = value(body.message);
    if (name.length < 2 || name.length > 80 || !emailPattern.test(email) || email.length > 160 || projectType.length < 2 || projectType.length > 80 || message.length < 10 || message.length > 2000) {
      return NextResponse.json({ error: "Please check each field and add a little more detail." }, { status: 400 });
    }
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !serviceKey) {
      return NextResponse.json({ error: "The contact form is not connected yet. Please email suryapandi779@gmail.com." }, { status: 503 });
    }
    const supabase = createClient(url, serviceKey, { auth: { persistSession: false, autoRefreshToken: false } });
    const { error } = await supabase.from("contact_messages").insert({ name, email, project_type: projectType, message });
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact submission failed", error);
    return NextResponse.json({ error: "Something went wrong. Please try again shortly." }, { status: 500 });
  }
}
