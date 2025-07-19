"use client"
import Link from "next/link";

export default function Error() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ fontSize: 48, fontWeight: 'bold', color: '#eab308' }}>Erro</h1>
      <p style={{ fontSize: 20, color: '#555' }}>Ocorreu um erro inesperado.</p>
      <Link href="/" style={{ marginTop: 24, color: '#16a34a', textDecoration: 'underline' }}>Voltar para o início</Link>
    </div>
  );
}
