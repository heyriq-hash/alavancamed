-- Tabela de clinicas (perfil do cliente)
CREATE TABLE IF NOT EXISTS clinicas (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Dados da clínica
  nome_clinica VARCHAR(255) NOT NULL,
  nome_responsavel VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefone VARCHAR(20),
  cidade VARCHAR(100),
  estado VARCHAR(2),
  
  -- Nicho e situação
  nicho VARCHAR(100) NOT NULL, -- estetica, dermatologia, odontologia
  tempo_mercado INTEGER, -- meses
  ticket_medio DECIMAL(10,2),
  atendimentos_mes INTEGER,
  tem_site BOOLEAN DEFAULT false,
  tem_instagram BOOLEAN DEFAULT false,
  roda_anuncios BOOLEAN DEFAULT false,
  
  -- Status do onboarding
  onboarding_completo BOOLEAN DEFAULT false
);

-- Tabela de estratégias geradas
CREATE TABLE IF NOT EXISTS estrategias (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  clinica_id UUID NOT NULL REFERENCES clinicas(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Estratégia gerada pela IA (JSON completo)
  mapa_estrategico JSONB NOT NULL,
  cronograma_postagens JSONB NOT NULL,
  estrutura_site JSONB NOT NULL,
  estrategia_anuncios JSONB NOT NULL,
  plano_90_dias JSONB NOT NULL,
  
  -- Metadados
  score_potencial INTEGER,
  nivel_prioridade VARCHAR(50)
);

-- Índices
CREATE INDEX IF NOT EXISTS idx_clinicas_user_id ON clinicas(user_id);
CREATE INDEX IF NOT EXISTS idx_estrategias_clinica_id ON estrategias(clinica_id);

-- RLS
ALTER TABLE clinicas ENABLE ROW LEVEL SECURITY;
ALTER TABLE estrategias ENABLE ROW LEVEL SECURITY;

-- Políticas - usuário só acessa seus próprios dados
CREATE POLICY "Users can read own clinica" ON clinicas
  FOR SELECT USING (auth.uid() = user_id);
  
CREATE POLICY "Users can insert own clinica" ON clinicas
  FOR INSERT WITH CHECK (auth.uid() = user_id);
  
CREATE POLICY "Users can update own clinica" ON clinicas
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can read own estrategia" ON estrategias
  FOR SELECT USING (
    clinica_id IN (SELECT id FROM clinicas WHERE user_id = auth.uid())
  );
  
CREATE POLICY "Users can insert own estrategia" ON estrategias
  FOR INSERT WITH CHECK (
    clinica_id IN (SELECT id FROM clinicas WHERE user_id = auth.uid())
  );
