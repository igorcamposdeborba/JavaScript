// Escreve a sigla do curso baseado no nome do curso, m parte da sigla ou na url
function sigla(newStringWithPos) {
  var string = newStringWithPos;
  
  var courseFIB = /.*(Finanças, Investimentos e Banking|Banking|01.FIB|\bFIB\b|financas\-investimentos\-banking).*/gim;
  var coursePPCBA = /.*(Psicologia Positiva|Psicologia positiva, ciência do bem-estar e autorrealização|Psicologia Positiva, Ciência do Bem-Estar e Autorrealização|Ciência do Bem-Estar|Autorrealização|07.PPCBA|\bPPCBA\b|psicologia\-positiva\-ciencia\-do\-bem\-estar\-e\-autorrealizacao).*/gim;
  var courseID = /.*(Influência Digital: Conteúdo e Estratégia|Influência Digital|08.ID|\bID\b|influencia\-digital\-conteudo\-e\-estrategia).*/gim
  var courseGP = /.*(Gestão de Pessoas. Carreiras. Liderança e Coaching|11.GP|\bGP\b|gestao\-depessoas\-carreiras\-lideranca\-coaching).*/gim
  var courseDPC = /.*(Direito Penal e Criminologia|Direito Penal|Criminologia|12.DPC|\bDPC\b|direito\-penal\-criminologia).*/gim
  var courseNC = /.*(Neurociências e Comportamento|13.NC|\bNC\b|neurociencias\-comportamento).*/gim
  var courseFA = /.*(Filosofia e Autoconhecimento: Uso Pessoal e Profissional|Filosofia e Autoconhecimento: uso pessoal e profissional|Filosofia e Autoconhecimento|14.FA|\bFA\b|filosofia\-e\-autoconhecimento\-uso\-pessoal\-e\-profissional).*/gim
  var courseETP = /.*(Educação Transformadora: pedagogia, fundamentos e práticas|Educação Transformadora|15.ETP|\bETP\b|educacao\-transformadora\-pedagogia\-fundamentos\-e\-praticas).*/gim
  var courseCH = /.*(Ciências Humanas: Sociologia, História e Filosofia|Ciências Humanas|18.CH|\bCH\b|ciencias\-humanas\-sociologia\-historia\-filosofia).*/gim
  var coursePDA = /.*(Psicologia do Desenvolvimento e da Aprendizagem|Psicologia da Aprendizagem|Psicologia do Desenvolvimento|Psico do desenvolvimento|19.PDA|\bPDA\b|pos\-psicologia\-do\-desenvolvimento\-e\-da\-aprendizagem).*/gim
  var courseTCC = /.*(Terapia Cognitivo.Comportamental|Terapia.Comportamental|TCC|20.TCC|\bTCC\b|terapia\-cognitivo\-comportamental).*/gim
  var courseGSP = /.*(Gestão, Governança e Setor Público|Gestão Pública|22.GSP|\bGSP\b|gestao\-governanca\-setor\-publico).*/gim
  var coursePFIN = /.*(Planejamento Financeiro e Finanças Comportamentais|Planejamento Financeiro|Finanças Comportamentais|23.PFIN|\bPFIN\b|planejamento\-financeiro\-e\-financas\-comportamentais).*/gim
  var courseFIC = /.*(Finanças Corporativas, M&A e Equity|Finanças Corporativas|M&A|\bMEA\b|Equity|24.FIC|\bFIC\b|financas\-corporativas\-m\-a\-e\-equity).*/gim
  var courseASGE = /.*(Nutrição. Alimentação Saudável e Empreendedorismo|Alimentação Saudável|25.ASGE|\bASGE\b|alimentacao\-saudavel\-gastronomia\-empreendedorismo).*/gim
  var courseGIS = /.*(Gestão, Inovação e Serviços em Saúde|Gestão .. Saúde|26.GIS|\bGIS\b|gestao\-inovacao\-servicos\-saude).*/gim
  var courseDH = /.*(Direitos Humanos, Responsabilidade Social e Cidadania Global|Direitos Humanos|27.DH|\bDH\b|direitos\-humanos\-responsabilidade\-social\-cidadania\-global).*/gim
  var courseAME = /.*(Moderna Educação: Metodologias, Tendências e Foco no Aluno|Moderna Educação|Foco no Aluno|29.AME|\bAME\b|moderna\-educacao).*/gim
  var courseDPT = /.*(Direito e Processo do Trabalho|Direito do Trabalho|Processo do Trabalho|32.DPT|\bDPT\b|direito\-e\-processo\-do\-trabalho).*/gim
  var courseCD = /.*(Ciência de Dados e Inteligência Artificial|Ciência de Dados|33.CD|\bCD\b|ciencia\-de\-dados).*/gim
  var courseUX = /.*(User Experience Design and Beyond|User Experience|\bUX\b|34.UX|\bUX\b|user\-experience\-design\-and\-beyond).*/gim
  var courseEE = /.*(Experiências e Eventos: Engajamento, Conectividade e Alto Impacto|Experiências e Eventos|Experiências Digitais: Gestão, Produção e Engajamento|Experiências Digitais|35.EE|\bEE\b|experiencias\-e\-eventos\-engajamento\-conectividade\-e\-alto\-impacto|Eventos).*/gim
  var courseEC = /.*(Estética e Cosmética. Gestão. Negócios e Procedimentos|Estética e Cosmética|36.EC|\bEC\b|estetica\-e\-cosmetica\-gestao\-negocios\-e\-procedimentos|Estética).*/gim
  var coursePOG = /.*(Psicologia Organizacional e Gestão de Pessoas|Psicologia Organizacional|37.POG|\bPOG\b|psicologia\-organizacional\-e\-gestao\-de\-pessoas|Psico org).*/gim
  var coursePSICO = /.*(Psicologia e Psicoterapia Online|Psicologia Online|Psicoterapia Online|Atendimento e Intervenções Online em Psicologia e Psicoterapia|Intervenções Online|Psicologia\: Intervenção e Atendimento Online|Intervenção e Atendimento Online|38.PSICO|\bPSICO\b|atendimento\-e\-intervencoes\-online\-em\-psicologia\-e\-psicoterapia).*/gim
  var courseCONT = /.*(Contabilidade, Gestão Financeira e Fiscal|Contabilidade|Gestão Fiscal|40.CONT|\bCONT\b|contabilidade\-gestao\-financeira\-e\-fiscal).*/gim
  var courseCCA = /.*(Controladoria, Compliance e Auditoria|Controladoria|Compliance|Auditoria|41.CCA|\bCCA\b|controladoria\-compliance\-e\-auditoria).*/gim
  var courseDIDA = /.*(Design de Interiores, Decoração e Ambientação|Design de Interiores|Decoração|Ambientação|42.DIDA|\bDIDA\b|design\-de\-interiores\-decoracao\-e\-ambientacao|Arquitetura).*/gim
  var courseCGGD = /.*(Segurança Digital, Governança e Gestão de Dados|Segurança Digital|46.CGGD|\bCGGD\b|cibersegurança\-governanca\-e\-gestao\-de\-dados).*/gim
  var courseNED = /.*(Neurociências, Educação e Desenvolvimento Infantil|Desenvolvimento Infantil|47.NED|\bNED\b|neurociencias\-educacao\-e\-desenvolvimento\-infantil|Neurociências e Educação).*/gim
  var courseDPCAT = /.*(Direito Público: Constitucional, Administrativo e Tributário|Direito Público|48.DPCAT|\bDPCAT\b|direito\-publico\-constitucional\-administrativo\-e\-tributario).*/gim
  var courseVNRAP = /.*(Vendas, Negociação e Resultados de Alta Performance|Vendas|Alta Performance|Vendas e Negociação|09.VNRAP|\bVNRAP\b|mba\-vendas\-negociacao\-e\-resultados\-de\-alta\-performance).*/gim
  var courseAFGV = /.*(Administração, Finanças e Geração de Valor|Administração|10.AFGV|\bAFGV\b|mba-administracao\-financas\-e\-geracao\-de\-valor|ADM).*/gim
  var courseTN = /.*(Tecnologia para Negócios. AI. Data Science e Big Data|Tecnologia para Negócios|16.TN|\bTN\b|mba\-tecnologia\-para\-negocios\-inteligencia\-artificial\-data\-science\-big\-data).*/gim
  var courseTDFN = /.*(Transformação Digital e Futuro dos Negócios|Transformação Digital|17.TDFN|\bTDFN\b|transformacao\-digital\-e\-futuro\-dos\-negocios).*/gim
  var courseMBG = /.*(Marketing, Branding e Growth|Branding|Growth|21.MBG|\bMBG\b|marketing\-branding\-growth).*/gim
  var courseLIG = /.*(Liderança, Inovação e Gestão 4.0|Liderança e Gestão|30.LIG|\bLIG\b|lideranca\-inovacao\-gestao).*/gim
  var courseGED = /.*(Gestão, Empreendedorismo e Desenvolvimento de Negócios|Desenvolvimento de Negócios|Gestão de Negócios|31.GED|\bGED\b|gestao\-empreendedorismo\-desenvolvimento\-negocios).*/gim
  var courseDSEC = /.*(Desenvolvimento Sustentável e Economia Circular|Desenvolvimento Sustentável|Economia Circular|39.DSEC|\bDSEC\b|mba\-em\-desenvolvimento\-sustentavel\-e\-economia\-circular).*/gim
  var courseLGEP = /.*(Liderança, Gestão de Equipes e Produtividade|43.LGEP|\bLGEP\b|mba\-em\-lideranca\-gestao\-de\-equipes\-e\-produtividade|Produtividade).*/gim
  var courseECOM = /.*(E.commerce e Negócios Digitais|E.com.erce|44.ECOM|\bE.COM\b|mba\-em\-e\-commerce\-e\-negocios\-digitais|Ecommerce).*/gim
  var courseBI = /.*(BI, Marketing Digital e Estratégia Data Driven|Marketing Digital|Data Driven|45.BI|\bBI\b|mba\-em\-bi\-marketing\-digital\-e\-estrategia\-data\-driven).*/gim
  var courseDIP = /.*(Direito Processual Civil|49 DIP|direito-processual-civil).*/gim
  var courseMAC = /.*(Mediação, Arbitragem e Conciliação|50 MAC|mediacao-arbitragem-e-conciliacao).*/gim
  var courseDT = /.*(Direito Tributário|51 DTRI|pos-direito-tributario).*/gim
  var courseGPMA = /.*(MBA em Gestão de Projetos e Metodologias Ágeis|52 GPMA|gestao-de-projetos-e-metodologias-ageis).*/gim
  var courseQGEP = /.*(MBA em Qualidade, Gestão e Engenharia de Processos|53 QGEP|qualidade-gestao-e-engenharia-de-processos).*/gim
  var courseNCLIN = /.*(Nutrição Clínica: Avaliação, Epidemiologia e Intervenção|54 NCLIN|nutricao-clinica-avaliacao-epidemiologia-intervencao).*/gim
  var coursePCLIN = /.*(Psicologia Clínica|55 PCLIN|psicologia-clinica).*/gim
  var courseEDON = /.*(Educação Online e Tecnologias de Aprendizagem|Educação Online e Tecnologias|56 EDON|educacao-online-tecnologias-aprendizagem).*/gim
  var courseMSI = /.*(Saúde e Práticas Integrativas|57 MSI|saude-praticas-integrativas).*/gim
  var courseENF = /.*(Enfermagem em Urgência e Emergência|58 ENF|enfermagem-em-urgencia-e-emergencia).*/gim
  var courseDEMP = /.*(Direito Empresarial|59 DEMP|direito-empresarial).*/
  var courseENSA = /.*(Envelhecimento Saudável|60 ENSA|envelhecimento-saudavel).*/gim
  var courseESPIRIT = /.*(Espiritualidade e Estudos da Consciência|61 ESPIRIT|espiritualidade-e-estudos-da-consciencia).*/gim
  var courseAGRO = /.*(Agronegócios: produto, indústria e inovação|62 AGRO|agronegocios-industria-produto-e-inovacao).*/gim
  var courseFULLSTACK = /.*(Desenvolvimento Full Stack|63 FULLSTACK|desenvolvimento-full-stack).*/gim
  var courseNEUROMKT = /.*(Neurociência, Consumo e Marketing|64 NEUROMKT|neurociencia-consumo-e-marketing).*/gim
  var courseFARM = /.*(Farmácia Clínica e Atenção Farmacêutica|65 FARM|farmacia-clinica-e-atencao-farmaceutica).*/gim
  var courseBIM = /.*(Building Information Modeling|66 BIM|building-information-modeling|\(BIM\)).*/gim
  var coursePAC = /.*(Psicanálise. Clínica e Análise Contemporânea|Psicanálise|67 PAC|psicanalise-e-analise-do-contemporaneo).*/gim
  var courseSPE = /.*(Saúde Pública e Epidemiologia|68 SPE|saude-publica-e-epidemiologia-clinica).*/gim
  var courseROBOTICA = /.*(Robótica e Projetos Digitais|69 ROBOTICA|robotica-e-projetos-digitais).*/gim


     if (string.includes(string, courseFIB)){ string = string.replace(courseFIB, '01 FIB');}
     if (string.includes(string, coursePPCBA)){ string = string.replace(coursePPCBA, '07 PPCBA');}
     if (string.includes(string, courseID)){ string = string.replace(courseID, '08 ID');}
     if (string.includes(string, courseGP)){ string = string.replace(courseGP, '11 GP');}
     if (string.includes(string, courseDPC)){ string = string.replace(courseDPC, '12 DPC');}
     if (string.includes(string, courseNC)){ string = string.replace(courseNC, '13 NC');}
     if (string.includes(string, courseFA)){ string = string.replace(courseFA, '14 FA');}
     if (string.includes(string, courseETP)){ string = string.replace(courseETP, '15 ETP');}
     if (string.includes(string, courseCH)){ string = string.replace(courseCH, '18 CH');}
     if (string.includes(string, coursePDA)){ string = string.replace(coursePDA, '19 PDA');}
     if (string.includes(string, courseTCC)){ string = string.replace(courseTCC, '20 TCC');}
     if (string.includes(string, courseGSP)){ string = string.replace(courseGSP, '22 GSP');}
     if (string.includes(string, coursePFIN)){ string = string.replace(coursePFIN, '23 PFIN');}
     if (string.includes(string, courseFIC)){ string = string.replace(courseFIC, '24 FIC');}
     if (string.includes(string, courseASGE)){ string = string.replace(courseASGE, '25 ASGE');}
     if (string.includes(string, courseGIS)){ string = string.replace(courseGIS, '26 GIS');}
     if (string.includes(string, courseDH)){ string = string.replace(courseDH, '27 DH');}
     if (string.includes(string, courseAME)){ string = string.replace(courseAME, '29 AME');}
     if (string.includes(string, courseDPT)){ string = string.replace(courseDPT, '32 DPT');}
     if (string.includes(string, courseCD)){ string = string.replace(courseCD, '33 CD');}
     if (string.includes(string, courseUX)){ string = string.replace(courseUX, '34 UX');}
     if (string.includes(string, courseEE)){ string = string.replace(courseEE, '35 EE');}
     if (string.includes(string, courseEC)){ string = string.replace(courseEC, '36 EC');}
     if (string.includes(string, coursePOG)){ string = string.replace(coursePOG, '37 POG');}
     if (string.includes(string, coursePSICO)){ string = string.replace(coursePSICO, '38 PSICO');}
     if (string.includes(string, courseCONT)){ string = string.replace(courseCONT, '40 CONT');}
     if (string.includes(string, courseCCA)){ string = string.replace(courseCCA, '41 CCA');}
     if (string.includes(string, courseDIDA)){ string = string.replace(courseDIDA, '42 DIDA');}
     if (string.includes(string, courseCGGD)){ string = string.replace(courseCGGD, '46 CGGD');}
     if (string.includes(string, courseNED)){ string = string.replace(courseNED, '47 NED');}
     if (string.includes(string, courseDPCAT)){ string = string.replace(courseDPCAT, '48 DPCAT');}
     if (string.includes(string, courseVNRAP)){ string = string.replace(courseVNRAP, '09 VNRAP');}
     if (string.includes(string, courseAFGV)){ string = string.replace(courseAFGV, '10 AFGV');}
     if (string.includes(string, courseTN)){ string = string.replace(courseTN, '16 TN');}
     if (string.includes(string, courseTDFN)){ string = string.replace(courseTDFN, '17 TDFN');}
     if (string.includes(string, courseMBG)){ string = string.replace(courseMBG, '21 MBG');}
     if (string.includes(string, courseLIG)){ string = string.replace(courseLIG, '30 LIG');}
     if (string.includes(string, courseGED)){ string = string.replace(courseGED, '31 GED');}
     if (string.includes(string, courseDSEC)){ string = string.replace(courseDSEC, '39 DSEC');}
     if (string.includes(string, courseLGEP)){ string = string.replace(courseLGEP, '43 LGEP');}
     if (string.includes(string, courseECOM)){ string = string.replace(courseECOM, '44 ECOM');}
     if (string.includes(string, courseBI)){ string = string.replace(courseBI, '45 BI');}
     if (string.includes(string, courseDIP)){ string = string.replace(courseDIP, '49 DPCIVIL');}
     if (string.includes(string, courseMAC)){ string = string.replace(courseMAC, '50 MAC');}
     if (string.includes(string, courseDT)){ string = string.replace(courseDT, '51 DTRI');}
     if (string.includes(string, courseGPMA)){ string = string.replace(courseGPMA, '52 GPMA');}
     if (string.includes(string, courseQGEP)){ string = string.replace(courseQGEP, '53 QUALIDADE');}
     if (string.includes(string, courseNCLIN)){ string = string.replace(courseNCLIN, '54 NUTRICLI');}
     if (string.includes(string, coursePCLIN)){ string = string.replace(coursePCLIN, '55 PSICLI');}
     if (string.includes(string, courseEDON)){ string = string.replace(courseEDON, '56 EDON');}
     if (string.includes(string, courseMSI)){ string = string.replace(courseMSI, '57 MSI');}
     if (string.includes(string, courseENF)){ string = string.replace(courseENF, '58 ENFERMAGEM');}
     if (string.includes(string, courseDEMP)){ string = string.replace(courseDEMP, '59 DEMP');}
     if (string.includes(string, courseENSA)){ string = string.replace(courseENSA, '60 ENSA');}
     if (string.includes(string, courseESPIRIT)){ string = string.replace(courseESPIRIT, '61 ESPIRIT');}
     if (string.includes(string, courseAGRO)){ string = string.replace(courseAGRO, '62 AGRO');}
     if (string.includes(string, courseFULLSTACK)){ string = string.replace(courseFULLSTACK, '63 FULLSTACK');}
     if (string.includes(string, courseNEUROMKT)){ string = string.replace(courseNEUROMKT, '64 NEUROMKT');}
     if (string.includes(string, courseFARM)){ string = string.replace(courseFARM, '65 FARM');}
     if (string.includes(string, courseBIM)){ string = string.replace(courseBIM, '66 BIM');}
     if (string.includes(string, coursePAC)){ string = string.replace(coursePAC, '67 PAC');}
     if (string.includes(string, courseSPE)){ string = string.replace(courseSPE, '68 SPE');}
     if (string.includes(string, courseROBOTICA)){ string = string.replace(courseROBOTICA, '69 ROBOTICA');}
 
	return string;
}
