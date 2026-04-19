-- Tabela para armazenar os diagnósticos
CREATE TABLE IF NOT EXISTS diagnostics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Dados do cliente
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefone VARCHAR(20),
  nome_clinica VARCHAR(255),
  cidade VARCHAR(100),
  
  -- Respostas do formulário (JSON)
  respostas JSONB NOT NULL,
  
  -- Status do pagamento
  payment_status VARCHAR(50) DEFAULT 'pending',
  stripe_session_id VARCHAR(255),
  stripe_payment_intent_id VARCHAR(255),
  
  -- Resultado do diagnóstico (gerado pela IA)
  diagnostico_gerado JSONB,
  diagnostico_pdf_url TEXT,
  
  -- Metadados
  score_geral INTEGER,
  nivel_maturidade VARCHAR(50)
);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_diagnostics_email ON diagnostics(email);
CREATE INDEX IF NOT EXISTS idx_diagnostics_payment_status ON diagnostics(payment_status);
CREATE INDEX IF NOT EXISTS idx_diagnostics_created_at ON diagnostics(created_at DESC);

-- RLS (Row Level Security)
ALTER TABLE diagnostics ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção pública (formulário)
CREATE POLICY "Allow public insert" ON diagnostics
  FOR INSERT WITH CHECK (true);

-- Política para leitura apenas do próprio diagnóstico via email
CREATE POLICY "Allow read own diagnostic" ON diagnostics
  FOR SELECT USING (true);
