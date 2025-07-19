import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ fontSize: 48, fontWeight: 'bold', color: '#16a34a' }}>404</h1>
      <p style={{ fontSize: 20, color: '#555' }}>Página não encontrada.</p>
      <Link href="/" style={{ marginTop: 24, color: '#16a34a', textDecoration: 'underline' }}>Voltar para o início</Link>
    </div>
  );
}
