import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/upload
 * Accepts multipart/form-data: token (string), file (File).
 * Wire this to your backend (e.g. validate token, upload to Supabase Storage, associate with user).
 */
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const token = formData.get("token");
    const file = formData.get("file");

    if (!token || typeof token !== "string" || !token.trim()) {
      return NextResponse.json(
        { message: "Missing or invalid token." },
        { status: 400 }
      );
    }

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { message: "Missing or invalid file." },
        { status: 400 }
      );
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { message: "File must be an image." },
        { status: 400 }
      );
    }

    // TODO: Validate token (e.g. against your DB or auth), then upload file to your storage
    // (e.g. Supabase Storage) and associate with the user. Return 200 on success.
    // Example placeholder:
    // const { data, error } = await supabase.storage.from('avatars').upload(`${userId}/${file.name}`, file, { upsert: true });
    // if (error) return NextResponse.json({ message: error.message }, { status: 500 });
    // return NextResponse.json({ success: true, url: data.publicUrl });

    return NextResponse.json(
      {
        message:
          "Upload endpoint not configured. Implement token validation and file storage in app/api/upload/route.ts.",
      },
      { status: 501 }
    );
  } catch {
    return NextResponse.json(
      { message: "Server error." },
      { status: 500 }
    );
  }
}
