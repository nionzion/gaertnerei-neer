// Hilfsfunktion zum Umwandeln des deutschen Datums (DD.MM.YYYY) in ein sortierbares Format
const parseDateString = (dateStr: string): Date => {
	const [day, month, year] = dateStr.split('.').map(num => parseInt(num, 10));
	return new Date(year, month - 1, day);
};

// Artikeldaten
const articlesData = [
	{
		title: 'Stauden, Blumen und Gemüse: Trends aus Gärtnerei in Glückstadt',
		source: 'SHZ',
		date: '02.08.2024',
		url: 'https://www.shz.de/lokales/glueckstadt/artikel/stauden-blumen-und-gemuese-trends-aus-gaertnerei-in-glueckstadt-47487039',
		image: 'https://images.noz-mhn.de/img/47490027/crop/cbase_16_9-w1820-h1022/321175869/302744536/img-4019-kopie.webp',
		excerpt: 'Welche Pflanzen sind in Glückstadt gerade gefragt? Und was macht die Gärtnerei Neer eigentlich außer dem Verkauf an Privatkunden? Gärtnereibesitzer Igor Neer klärt auf und beruhigt: Den grünen Daumen kann man lernen.'
	},
	{
		title: 'Gärtnerei: Igor Neer darf wieder verkaufen',
		source: 'SHZ',
		date: '02.03.2021',
		url: 'https://www.shz.de/lokales/kellinghusen/artikel/corona-gaertnerei-igor-neer-darf-wieder-verkaufen-20157681',
		image: 'https://images.noz-mhn.de/img/20157608/crop/cbase_16_9-w1820-h1022/1162892687/1834426727/6aa7bfa6fdabf9375fe0628676c297f0.webp',
		excerpt: 'Das Gelb der Stiefmütterchen leuchtet. Igor Neer steht in einem Meer von Blumen. Alle selbst gezogen, sagt der 33-Jährige und erfreut sich an der Farbenpracht, die den Frühling verheißt. „Wir kaufen nur ganz wenige Pflanzen zu“, ist er stolz auf die Eigenproduktion in dem Familienbetrieb an der Chaussee in der Blomeschen Wildnis. Es ist schön, unabhängig zu sein.'
	},
	{
		title: 'Igor Neer setzt mit einer Friedenstaube ein Zeichen gegen den Krieg',
		source: 'SHZ',
		date: '05.05.2022',
		url: 'https://www.shz.de/lokales/kellinghusen/artikel/hafen-glueckstadt-igor-neer-setzt-mit-einer-friedenstaube-ein-zeichen-gegen-den-krieg-40064408',
		image: 'https://images.noz-mhn.de/img/40064396/crop/cbase_16_9-w1820-h1022/574449544/1129120504/kreisel-glckstadt-friedenstaube-.webp',
		excerpt: 'Stiller Protest mit Blumen gegen das Unrecht in der Ukraine. Mit einer Friedenstaube protestiert Igor Neer gegen den Krieg in der Ukraine. Der 35-Jährige pflanzte ein Beet mit Blumen auf dem Kreisel am Hafen. Die Blumen ergeben das Bild der Taube.'
	},
	{
		title: 'In der Blomeschen Wildnis warten tausende Pflanzen auf ihren großen Auftritt',
		source: 'SHZ',
		date: '20.03.2023',
		url: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.shz.de/lokales/glueckstadt/artikel/blomesche-wildnis-tausende-pflanzen-warten-auf-ihren-auftritt-44355753&ved=2ahUKEwicu4KEkp6MAxXXAdsEHRJMKVYQxfQBKAB6BAgPEAE&usg=AOvVaw0UBi4dZM276IqMse6FXZT6',
		image: 'https://images.noz-mhn.de/img/44355251/crop/cbase_16_9-w1820-h1022/21386165/521123119/km-neer7.webp',
		excerpt: 'Bald ziehen wieder zahlreiche bunte Blumen, Kräuter- und Gemüsepflanzen in die Gärten in und um Glückstadt ein. Die Gärtnereien sind startklar für den Frühling.'
	},
	{
		title: 'Gärtnerei Neer kämpft mit den Folgen der Corona-Krise',
		source: 'SHZ',
		date: '15.04.2020',
		url: 'https://www.shz.de/lokales/itzehoe/artikel/gaertnerei-neer-kaempft-mit-den-folgen-der-corona-krise-41814610',
		image: 'https://images.noz-mhn.de/img/22006839/crop/cbase_16_9-w1820-h1022/761722296/958273327/23-120729878-23-120732530-1586953881.webp',
		excerpt: 'Zwei trockene Jahre und eines mit Corona-Krise zum Saisonauftakt: Gärtnereien müssen kämpfen.'
	},
	{
		title: 'Blumen für die Stadt: Hornveilchen zieren Rondell und Hafenkreisel in Glückstadt',
		source: 'SHZ',
		date: '19.04.2023',
		url: 'https://www.shz.de/lokales/glueckstadt/artikel/blumen-verein-aktiv-fuer-glueckstadt-pflanzt-hornveilchen-44562930',
		image: 'https://images.noz-mhn.de/img/44562303/crop/cbase_16_9-w1820-h1022/926535662/1960964551/gscrblumen.webp',
		excerpt: 'Die Stadt für Glückstädter und Gäste schöner zu machen, ist das Ziel des Vereins Aktiv für Glückstadt. Igor Neer von der gleichnamigen Gärtnerei pflanzte jetzt zu diesem Zweck hunderte Blumen in der Glückstädter Innenstadt.'
	},
	{
		title: 'Glückstadt soll schöner werden',
		source: 'SHZ',
		date: '24.07.2015',
		url: 'https://www.shz.de/lokales/itzehoe/artikel/glueckstadt-soll-schoener-werden-41525052',
		image: 'https://images.noz-mhn.de/img/21200374/crop/cbase_16_9-w1820-h1022/1101429997/1021924668/23-72574650-23-72574651-1437664578.webp',
		excerpt: 'Mit einem bepflanzten Verkehrskreisel wollen Henning Plotz und Igor Neer andere Bürger dazu aufrufen, die Stadt mit Blumen aufzuwerten.'
	}

];

// Sortiere nach Datum (neueste zuerst)
export const pressArticles = articlesData.sort((a, b) => {
	const dateA = parseDateString(a.date);
	const dateB = parseDateString(b.date);
	return dateB.getTime() - dateA.getTime();
});
