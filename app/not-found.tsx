import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4">
      <h1 className="text-2xl font-semibold">Página não encontrada</h1>
      <p className="text-text-tertiary">
        Não foi possível encontrar a página que você procura.
      </p>
      <Link
        href="/"
        className="rounded-md bg-background-primary px-4 py-2 text-text-secondary hover:opacity-90"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
