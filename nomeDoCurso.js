// Escreve o nome do curso
function curso(newStringWithPos) {
  var string = newStringWithPos;
  
    var coursePos = /(01.FIB|07.PPCBA|08.ID|11.GP|12.DPC|13.NC|14.FA|15.ETP|18.CH|19.PDA|20.TCC|22.GSP|23.PFIN|24.FIC|25.ASGE|26.GIS|27.DH|29.AME|32.DPT|33.CD|34.UX|35.EE|36.EC|37.POG|38.PSICO|40.CONT|41.CCA|42.DIDA|46.CGGD|47.NED|48.DPCAT|49.DPCIVIL|50.MAC|51.DTRI|52.GPMA|53.QUALIDADE|54.NUTRICLI|55.PSICLI|56.EDON|57.MSI|58.ENFERMAGEM|59.DEMP|60.ENSA|61.ESPIRIT|63.FULLSTACK|65.FARM|66.BIM|67.PAC|68.SPE|69.ROBOTICA)/gi;
    var courseMBA =  /(09.VNRAP|10.AFGV|16.TN|17.TDFN|21.MBG|30.LIG|31.GED|39.DSEC|43.LGEP|44.ECOM|45.BI|62.AGRO|64.NEUROMKT|00.INST)/gi;
  
     if (string == '01 FIB'){ string = string.replace(coursePos, 'Finanças, Investimentos e Banking');}
     if (string == '07 PPCBA'){ string = string.replace(coursePos, 'Psicologia Positiva, Ciência do Bem-Estar e Autorrealização');}
     if (string == '08 ID'){ string = string.replace(coursePos, 'Influência Digital: Conteúdo e Estratégia');}
     if (string == '11 GP'){ string = string.replace(coursePos, 'Gestão de Pessoas: Carreiras, Liderança e Coaching');}  
     if (string == '12 DPC'){ string = string.replace(coursePos, 'Direito Penal e Criminologia');}  
     if (string == '13 NC'){ string = string.replace(coursePos, 'Neurociências e Comportamento');}
     if (string == '14 FA'){ string = string.replace(coursePos, 'Filosofia e Autoconhecimento: Uso Pessoal e Profissional');}
     if (string == '15 ETP'){ string = string.replace(coursePos, 'Educação Transformadora: Pedagogia, Fundamentos e Práticas');}  
     if (string == '18 CH'){ string = string.replace(coursePos, 'Ciências Humanas: Sociologia, História e Filosofia');}  
     if (string == '19 PDA'){ string = string.replace(coursePos, 'Psicologia do Desenvolvimento e da Aprendizagem');}
     if (string == '20 TCC'){ string = string.replace(coursePos, 'Terapia Cognitivo Comportamental');}
     if (string == '22 GSP'){ string = string.replace(coursePos, 'Gestão, Governança e Setor Público');}
     if (string == '23 PFIN'){ string = string.replace(coursePos, 'Planejamento Financeiro e Finanças Comportamentais');}  
     if (string == '24 FIC'){ string = string.replace(coursePos, 'Finanças Corporativas, M&A e Equity');}  
     if (string == '25 ASGE'){ string = string.replace(coursePos, 'Nutrição, Alimentação Saúdável e Empreendedorismo');}
     if (string == '26 GIS'){ string = string.replace(coursePos, 'Gestão, Inovação e Serviços em Saúde');}
     if (string == '27 DH'){ string = string.replace(coursePos, 'Direitos Humanos, Responsabilidade Social e Cidadania Global');}  
     if (string == '29 AME'){ string = string.replace(coursePos, 'A Moderna Educação: Metodologias, Tendências e Foco no Aluno');}  
     if (string == '32 DPT'){ string = string.replace(coursePos, 'Direito e Processo do Trabalho');}
     if (string == '33 CD'){ string = string.replace(coursePos, 'Ciência de Dados e Inteligência Artificial');}
     if (string == '34 UX'){ string = string.replace(coursePos, 'User Experience Design and Beyond');}
     if (string == '35 EE'){ string = string.replace(coursePos, 'Experiências Digitais: Gestão, Produção e Engajamento');}  
     if (string == '36 EC'){ string = string.replace(coursePos, 'Estética e Cosmética: Gestão e Negócios');}  
     if (string == '37 POG'){ string = string.replace(coursePos, 'Psicologia Organizacional e Gestão de Pessoas');}
     if (string == '38 PSICO'){ string = string.replace(coursePos, 'Psicologia: Intervenção e Atendimento Online');}
     if (string == '40 CONT'){ string = string.replace(coursePos, 'Contabilidade, Gestão Financeira e Fiscal');}  
     if (string == '41 CCA'){ string = string.replace(coursePos, 'Controladoria, Compliance e Auditoria');}  
     if (string == '42 DIDA'){ string = string.replace(coursePos, 'Design de Interiores, Decoração e Ambientação');}
     if (string == '46 CGGD'){ string = string.replace(coursePos, 'Segurança Digital, Governança e Gestão de Dados');}
     if (string == '47 NED'){ string = string.replace(coursePos, 'Neurociências, Educação e Desenvolvimento Infantil');}
     if (string == '48 DPCAT'){ string = string.replace(coursePos, 'Direito Público: Constitucional, Administrativo e Tributário');}  
     if (string == '09 VNRAP'){ string = string.replace(courseMBA, 'Vendas, Negociação e Resultados de Alta Performance');}
     if (string == '10 AFGV'){ string = string.replace(courseMBA, 'Administração, Finanças e Geração de Valor');}
     if (string == '16 TN'){ string = string.replace(courseMBA, 'Tecnologia para Negócios: AI, Data Science e Big Data');}
     if (string == '17 TDFN'){ string = string.replace(courseMBA, 'Transformação Digital e Futuro dos Negócios');}
     if (string == '21 MBG'){ string = string.replace(courseMBA, 'Marketing, Branding e Growth');}
     if (string == '30 LIG'){ string = string.replace(courseMBA, 'Liderança, Inovação e Gestão 4.0');}
     if (string == '31 GED'){ string = string.replace(courseMBA, 'Gestão, Empreendedorismo e Desenvolvimento de Negócios');}
     if (string == '39 DSEC'){ string = string.replace(courseMBA, 'Desenvolvimento Sustentável e Economia Circular');}
     if (string == '43 LGEP'){ string = string.replace(courseMBA, 'Liderança, Gestão de Equipes e Produtividade');}
     if (string == '44 ECOM'){ string = string.replace(courseMBA, 'E-commerce e Negócios Digitais');}
     if (string == '45 BI'){ string = string.replace(courseMBA, 'BI, Marketing Digital e Estratégia Data Driven');}
     if (string == '49 DPCIVIL'){ string = string.replace(coursePos, 'Direito Processual Civil');}
     if (string == '50 MAC'){ string = string.replace(coursePos, 'Mediação, Arbitragem e Conciliação');}
     if (string == '51 DTRI'){ string = string.replace(coursePos, 'Direito Tributário');}
     if (string == '52 GPMA'){ string = string.replace(coursePos, 'Gestão de Projetos e Metodologias Ágeis');}
     if (string == '53 QUALIDADE'){ string = string.replace(coursePos, 'Qualidade, Gestão e Engenharia de Processos');}
     if (string == '54 NUTRICLI'){ string = string.replace(coursePos, 'Nutrição Clínica: Avaliação, Epidemiologia e Intervenção');} 
     if (string == '55 PSICLI'){ string = string.replace(coursePos, 'Psicologia Clínica');}
     if (string == '56 EDON'){ string = string.replace(coursePos, 'Educação Online e Tecnologias de Aprendizagem');}
     if (string == '57 MSI'){ string = string.replace(coursePos, 'Saúde e Práticas Integrativas');}
     if (string == '58 ENFERMAGEM'){ string = string.replace(coursePos, 'Enfermagem em Urgência e Emergência');}
     if (string == '59 DEMP'){ string = string.replace(coursePos, 'Direito Empresarial');}
     if (string == '60 ENSA'){ string = string.replace(coursePos, 'Envelhecimento Saudável');}
     if (string == '61 ESPIRIT'){ string = string.replace(coursePos, 'Espiritualidade e Estudos da Consciência');}
     if (string == '62 AGRO'){ string = string.replace(courseMBA, 'Agronegócios: Indústria, Produto e Inovação');}
     if (string == '63 FULLSTACK'){ string = string.replace(coursePos, 'Desenvolvimento Full Stack');}
     if (string == '64 NEUROMKT'){ string = string.replace(courseMBA, 'Neurociência, Consumo e Marketing');}
     if (string == '65 FARM'){ string = string.replace(coursePos, 'Farmácia Clínica e Atenção Farmacêutica');}
     if (string == '66 BIM'){ string = string.replace(coursePos, 'Building Information Modeling (BIM)');}
     if (string == '67 PAC'){ string = string.replace(coursePos, 'Psicanálise, Clínica e Análise Contemporânea');}
     if (string == '68 SPE'){ string = string.replace(coursePos, 'Saúde Pública e Epidemiologia');}
     if (string == '69 ROBOTICA'){ string = string.replace(coursePos, 'Robótica e Projetos Digitais');}

	return string;
} 
