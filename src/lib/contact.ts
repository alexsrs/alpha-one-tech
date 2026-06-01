export const contactEmail = "alphainstalacoes02@gmail.com";
export const instagramHandle = "alphainstalacoes02";
export const instagramUrl = `https://www.instagram.com/${instagramHandle}/`;

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  company?: string;
  service?: string;
}

export interface ContactResult {
  success: boolean;
  error?: string;
}

export async function submitContact(data: ContactFormData): Promise<ContactResult> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      return {
        success: false,
        error: body.error || `Erro ao enviar (HTTP ${res.status}). Tente novamente.`,
      };
    }

    return { success: true };
  } catch (err: unknown) {
    if (err instanceof DOMException && err.name === "AbortError") {
      return {
        success: false,
        error: "Tempo esgotado. Verifique sua conexão e tente novamente.",
      };
    }
    return {
      success: false,
      error: "Erro de conexão. Verifique sua internet e tente novamente.",
    };
  }
}
