import { createFileRoute, Link } from "@tanstack/react-router";
import { Store, Hammer, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsappUrl } from "@/config/site";

export const Route = createFileRoute("/loja")({
  head: () => ({
    meta: [
      { title: "Loja - EDR Aquecedores" },
      {
        name: "description",
        content:
          "Loja de aquecedores solares, boilers e acessórios da EDR Aquecedores. Em breve, novos produtos disponíveis.",
      },
      { property: "og:title", content: "Loja - EDR Aquecedores" },
      {
        property: "og:description",
        content: "Nossa loja online está em construção. Em breve você poderá comprar direto por aqui.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LojaPage,
});

function LojaPage() {
  return (
    <section className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-solar shadow-elegant">
        <Store className="h-10 w-10 text-solar-foreground" />
      </span>
      <h1 className="mt-8 text-4xl font-bold tracking-tight md:text-5xl">
        Loja <span className="text-primary">em construção</span>
      </h1>
      <p className="mt-4 max-w-xl text-muted-foreground md:text-lg">
        Estamos preparando uma loja com aquecedores solares, boilers e acessórios para você comprar
        direto pelo site. Enquanto isso, fale com nossa equipe e receba uma cotação personalizada.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button
          asChild
          size="lg"
          className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"
        >
          <a
            href={buildWhatsappUrl(
              "Olá! Vi que a loja do site está em construção e gostaria de uma cotação.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-5 w-5" />
            Pedir cotação no WhatsApp
          </a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/">
            <Hammer className="h-4 w-4" />
            Conheça nossos serviços
          </Link>
        </Button>
      </div>
    </section>
  );
}
