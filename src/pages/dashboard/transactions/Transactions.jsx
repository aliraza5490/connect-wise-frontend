import { Layout } from '@/components/custom/layout';
import { UserNav } from '@/components/UserNav';
import { columns } from './components/columns';
import { DataTable } from './components/data-table';

const data = [
  {
    _id: 1,
    userName: 'Isadore Maplestone',
    email: 'imaplestone0@list-manage.com',
    createdAt: '2023-12-24T12:21:23Z',
  },
  {
    _id: 2,
    userName: 'Barney Thieme',
    email: 'bthieme1@shutterfly.com',
    createdAt: '2023-10-24T00:38:09Z',
  },
  {
    _id: 3,
    userName: 'Shaughn Marini',
    email: 'smarini2@ucsd.edu',
    createdAt: '2024-02-08T08:42:24Z',
  },
  {
    _id: 4,
    userName: 'Corbet Pennini',
    email: 'cpennini3@geocities.com',
    createdAt: '2023-12-20T17:39:28Z',
  },
  {
    _id: 5,
    userName: 'Harlin Tandy',
    email: 'htandy4@pbs.org',
    createdAt: '2023-09-18T21:04:04Z',
  },
  {
    _id: 6,
    userName: 'Emmeline Ridding',
    email: 'eridding5@sina.com.cn',
    createdAt: '2024-04-25T00:29:06Z',
  },
  {
    _id: 7,
    userName: 'Felic Sore',
    email: 'fsore6@t-online.de',
    createdAt: '2024-07-10T08:13:51Z',
  },
  {
    _id: 8,
    userName: 'Lilli Hurdman',
    email: 'lhurdman7@usda.gov',
    createdAt: '2024-05-31T14:05:47Z',
  },
  {
    _id: 9,
    userName: 'Delmar Breydin',
    email: 'dbreydin8@simplemachines.org',
    createdAt: '2024-02-01T19:29:57Z',
  },
  {
    _id: 10,
    userName: 'Padgett Gissing',
    email: 'pgissing9@ihg.com',
    createdAt: '2024-02-17T20:07:59Z',
  },
  {
    _id: 11,
    userName: 'Colette Luetchford',
    email: 'cluetchforda@nba.com',
    createdAt: '2023-11-08T02:28:16Z',
  },
  {
    _id: 12,
    userName: 'Bartholemy Tumbelty',
    email: 'btumbeltyb@plala.or.jp',
    createdAt: '2023-12-15T01:30:05Z',
  },
  {
    _id: 13,
    userName: 'Patten Devanny',
    email: 'pdevannyc@wp.com',
    createdAt: '2023-08-28T02:13:07Z',
  },
  {
    _id: 14,
    userName: 'Michale Skaife',
    email: 'mskaifed@bluehost.com',
    createdAt: '2024-03-14T09:47:08Z',
  },
  {
    _id: 15,
    userName: 'Larina MacLice',
    email: 'lmaclicee@hatena.ne.jp',
    createdAt: '2023-12-14T05:41:48Z',
  },
  {
    _id: 16,
    userName: 'Lind Camamill',
    email: 'lcamamillf@virginia.edu',
    createdAt: '2024-04-30T22:01:12Z',
  },
  {
    _id: 17,
    userName: 'Hyacinthe Boniface',
    email: 'hbonifaceg@infoseek.co.jp',
    createdAt: '2023-11-10T06:24:43Z',
  },
  {
    _id: 18,
    userName: 'Sibeal Adess',
    email: 'sadessh@chron.com',
    createdAt: '2023-09-25T02:56:41Z',
  },
  {
    _id: 19,
    userName: 'Linette Nanuccioi',
    email: 'lnanuccioii@google.co.jp',
    createdAt: '2024-06-15T04:09:58Z',
  },
  {
    _id: 20,
    userName: 'Dulcy Sprowle',
    email: 'dsprowlej@squarespace.com',
    createdAt: '2023-09-01T18:59:33Z',
  },
  {
    _id: 21,
    userName: 'Felicity Andrivot',
    email: 'fandrivotk@unc.edu',
    createdAt: '2024-02-14T11:25:04Z',
  },
  {
    _id: 22,
    userName: 'Jamey Radband',
    email: 'jradbandl@nasa.gov',
    createdAt: '2024-03-18T13:47:52Z',
  },
  {
    _id: 23,
    userName: 'Burg Morrowe',
    email: 'bmorrowem@accuweather.com',
    createdAt: '2024-01-12T00:22:26Z',
  },
  {
    _id: 24,
    userName: 'Charline Newgrosh',
    email: 'cnewgroshn@cdc.gov',
    createdAt: '2024-02-24T02:08:33Z',
  },
  {
    _id: 25,
    userName: 'Haywood Tod',
    email: 'htodo@paginegialle.it',
    createdAt: '2024-07-13T11:28:10Z',
  },
  {
    _id: 26,
    userName: 'Marika Basilone',
    email: 'mbasilonep@spiegel.de',
    createdAt: '2023-11-28T08:41:44Z',
  },
  {
    _id: 27,
    userName: 'Randie Cicconetti',
    email: 'rcicconettiq@upenn.edu',
    createdAt: '2023-12-22T20:32:15Z',
  },
  {
    _id: 28,
    userName: 'Vonni Kacheler',
    email: 'vkachelerr@amazonaws.com',
    createdAt: '2024-03-21T05:00:28Z',
  },
  {
    _id: 29,
    userName: 'Elisabet Bowcher',
    email: 'ebowchers@taobao.com',
    createdAt: '2023-11-22T19:20:56Z',
  },
  {
    _id: 30,
    userName: 'Andreana Durrington',
    email: 'adurringtont@vistaprint.com',
    createdAt: '2024-04-30T02:05:26Z',
  },
  {
    _id: 31,
    userName: 'Elana Toderini',
    email: 'etoderiniu@plala.or.jp',
    createdAt: '2024-06-06T07:44:01Z',
  },
  {
    _id: 32,
    userName: 'Larry Edmans',
    email: 'ledmansv@admin.ch',
    createdAt: '2024-05-28T05:01:54Z',
  },
  {
    _id: 33,
    userName: 'Persis Tincknell',
    email: 'ptincknellw@about.com',
    createdAt: '2023-12-24T12:04:11Z',
  },
  {
    _id: 34,
    userName: 'Humfrid De Minico',
    email: 'hdex@sun.com',
    createdAt: '2024-03-11T08:26:50Z',
  },
  {
    _id: 35,
    userName: 'Thatcher Swepson',
    email: 'tswepsony@dedecms.com',
    createdAt: '2024-02-18T10:22:33Z',
  },
  {
    _id: 36,
    userName: 'Bernita Goodman',
    email: 'bgoodmanz@foxnews.com',
    createdAt: '2024-02-11T14:09:05Z',
  },
  {
    _id: 37,
    userName: 'Rab Flawith',
    email: 'rflawith10@list-manage.com',
    createdAt: '2023-08-21T08:25:42Z',
  },
  {
    _id: 38,
    userName: 'Arlen Clampton',
    email: 'aclampton11@newsvine.com',
    createdAt: '2023-09-14T11:52:19Z',
  },
  {
    _id: 39,
    userName: 'Merrie Hutfield',
    email: 'mhutfield12@surveymonkey.com',
    createdAt: '2024-06-05T10:55:49Z',
  },
  {
    _id: 40,
    userName: 'Alberto Neary',
    email: 'aneary13@fda.gov',
    createdAt: '2024-01-03T20:31:37Z',
  },
  {
    _id: 41,
    userName: 'Maddalena Birnie',
    email: 'mbirnie14@wiley.com',
    createdAt: '2024-06-28T15:40:40Z',
  },
  {
    _id: 42,
    userName: 'Morly Brabant',
    email: 'mbrabant15@facebook.com',
    createdAt: '2024-03-13T12:38:40Z',
  },
  {
    _id: 43,
    userName: 'Kay Pond',
    email: 'kpond16@godaddy.com',
    createdAt: '2024-07-31T00:27:54Z',
  },
  {
    _id: 44,
    userName: 'Salome Ponsford',
    email: 'sponsford17@istockphoto.com',
    createdAt: '2024-05-17T02:25:35Z',
  },
  {
    _id: 45,
    userName: 'Trula Debold',
    email: 'tdebold18@state.tx.us',
    createdAt: '2024-01-12T03:49:47Z',
  },
  {
    _id: 46,
    userName: 'Chantal Wetwood',
    email: 'cwetwood19@umn.edu',
    createdAt: '2024-05-06T14:59:14Z',
  },
  {
    _id: 47,
    userName: 'Coralie Mears',
    email: 'cmears1a@tinypic.com',
    createdAt: '2024-06-12T05:03:46Z',
  },
  {
    _id: 48,
    userName: 'Ruthann Churcher',
    email: 'rchurcher1b@yahoo.co.jp',
    createdAt: '2024-08-09T17:57:48Z',
  },
  {
    _id: 49,
    userName: 'Robby Kohneke',
    email: 'rkohneke1c@facebook.com',
    createdAt: '2024-08-04T14:31:40Z',
  },
  {
    _id: 50,
    userName: 'Ileana Ordidge',
    email: 'iordidge1d@ft.com',
    createdAt: '2023-09-11T02:20:49Z',
  },
  {
    _id: 51,
    userName: 'Loria Giffaut',
    email: 'lgiffaut1e@desdev.cn',
    createdAt: '2024-07-03T10:02:31Z',
  },
  {
    _id: 52,
    userName: 'Jareb Garey',
    email: 'jgarey1f@facebook.com',
    createdAt: '2024-07-29T01:30:47Z',
  },
  {
    _id: 53,
    userName: 'Junie Buie',
    email: 'jbuie1g@ifeng.com',
    createdAt: '2023-12-02T05:38:24Z',
  },
  {
    _id: 54,
    userName: 'Halsy Cocci',
    email: 'hcocci1h@multiply.com',
    createdAt: '2024-04-12T10:28:13Z',
  },
  {
    _id: 55,
    userName: 'Kerby Canet',
    email: 'kcanet1i@usatoday.com',
    createdAt: '2024-04-28T00:56:51Z',
  },
  {
    _id: 56,
    userName: 'Dory Rosle',
    email: 'drosle1j@gizmodo.com',
    createdAt: '2023-09-07T16:11:27Z',
  },
  {
    _id: 57,
    userName: 'Kevyn Adamoli',
    email: 'kadamoli1k@mlb.com',
    createdAt: '2024-06-17T10:39:23Z',
  },
  {
    _id: 58,
    userName: 'Harley Dany',
    email: 'hdany1l@blogtalkradio.com',
    createdAt: '2024-01-15T06:39:27Z',
  },
  {
    _id: 59,
    userName: 'Everard Jenoure',
    email: 'ejenoure1m@buzzfeed.com',
    createdAt: '2023-11-21T01:14:02Z',
  },
  {
    _id: 60,
    userName: 'Laure Lidgely',
    email: 'llidgely1n@rambler.ru',
    createdAt: '2023-11-03T02:36:45Z',
  },
  {
    _id: 61,
    userName: 'Yves Agastina',
    email: 'yagastina1o@friendfeed.com',
    createdAt: '2024-08-17T00:03:49Z',
  },
  {
    _id: 62,
    userName: 'Stanfield Latchmore',
    email: 'slatchmore1p@ca.gov',
    createdAt: '2023-08-27T01:16:55Z',
  },
  {
    _id: 63,
    userName: 'Cheslie Sherar',
    email: 'csherar1q@bizjournals.com',
    createdAt: '2024-03-23T19:18:38Z',
  },
  {
    _id: 64,
    userName: 'Emogene Dechelette',
    email: 'edechelette1r@answers.com',
    createdAt: '2024-05-15T00:32:57Z',
  },
  {
    _id: 65,
    userName: 'Alvis Adger',
    email: 'aadger1s@stumbleupon.com',
    createdAt: '2023-09-08T13:21:08Z',
  },
  {
    _id: 66,
    userName: 'Josee McGifford',
    email: 'jmcgifford1t@amazon.co.jp',
    createdAt: '2023-09-18T22:32:20Z',
  },
  {
    _id: 67,
    userName: 'Pernell Stivani',
    email: 'pstivani1u@sciencedirect.com',
    createdAt: '2023-11-24T17:07:32Z',
  },
  {
    _id: 68,
    userName: 'Conn Tonry',
    email: 'ctonry1v@uol.com.br',
    createdAt: '2024-03-01T23:23:44Z',
  },
  {
    _id: 69,
    userName: 'Stella Curado',
    email: 'scurado1w@fda.gov',
    createdAt: '2023-09-01T03:47:44Z',
  },
  {
    _id: 70,
    userName: 'Lester Fowlestone',
    email: 'lfowlestone1x@businesswire.com',
    createdAt: '2024-05-30T22:00:39Z',
  },
  {
    _id: 71,
    userName: 'Britt Magill',
    email: 'bmagill1y@zdnet.com',
    createdAt: '2023-10-18T03:31:59Z',
  },
  {
    _id: 72,
    userName: 'Fidel Gilpin',
    email: 'fgilpin1z@alexa.com',
    createdAt: '2024-06-29T15:49:49Z',
  },
  {
    _id: 73,
    userName: 'Brianna Lethley',
    email: 'blethley20@uol.com.br',
    createdAt: '2024-02-01T03:21:57Z',
  },
  {
    _id: 74,
    userName: 'Phedra Steels',
    email: 'psteels21@berkeley.edu',
    createdAt: '2023-11-06T11:48:09Z',
  },
  {
    _id: 75,
    userName: 'Jase Elcombe',
    email: 'jelcombe22@comcast.net',
    createdAt: '2024-05-07T03:33:29Z',
  },
  {
    _id: 76,
    userName: 'Lindsey Darington',
    email: 'ldarington23@cnet.com',
    createdAt: '2023-08-31T03:10:24Z',
  },
  {
    _id: 77,
    userName: 'Yalonda Bettison',
    email: 'ybettison24@harvard.edu',
    createdAt: '2023-11-16T17:09:15Z',
  },
  {
    _id: 78,
    userName: 'Hieronymus Whate',
    email: 'hwhate25@foxnews.com',
    createdAt: '2024-03-21T13:25:34Z',
  },
  {
    _id: 79,
    userName: 'Prescott Gwioneth',
    email: 'pgwioneth26@indiegogo.com',
    createdAt: '2023-11-05T12:07:24Z',
  },
  {
    _id: 80,
    userName: 'Loren Huddleston',
    email: 'lhuddleston27@seattletimes.com',
    createdAt: '2023-12-28T11:12:39Z',
  },
  {
    _id: 81,
    userName: 'Paulo Honig',
    email: 'phonig28@statcounter.com',
    createdAt: '2024-03-13T17:25:22Z',
  },
  {
    _id: 82,
    userName: 'Normy Sakins',
    email: 'nsakins29@github.com',
    createdAt: '2023-12-02T08:05:44Z',
  },
  {
    _id: 83,
    userName: 'Sioux Charker',
    email: 'scharker2a@geocities.com',
    createdAt: '2023-08-23T23:08:53Z',
  },
  {
    _id: 84,
    userName: 'Lynnette Rylatt',
    email: 'lrylatt2b@ameblo.jp',
    createdAt: '2023-12-29T05:10:11Z',
  },
  {
    _id: 85,
    userName: 'Glenn Schwandner',
    email: 'gschwandner2c@creativecommons.org',
    createdAt: '2023-11-13T06:00:14Z',
  },
  {
    _id: 86,
    userName: 'Savina Newby',
    email: 'snewby2d@google.co.uk',
    createdAt: '2024-03-05T15:26:07Z',
  },
  {
    _id: 87,
    userName: 'Dwayne Crowne',
    email: 'dcrowne2e@liveinternet.ru',
    createdAt: '2023-08-24T06:45:44Z',
  },
  {
    _id: 88,
    userName: 'Antonin Baniard',
    email: 'abaniard2f@drupal.org',
    createdAt: '2023-12-23T07:11:20Z',
  },
  {
    _id: 89,
    userName: 'Oliy Yockley',
    email: 'oyockley2g@bloglovin.com',
    createdAt: '2024-04-06T21:26:41Z',
  },
  {
    _id: 90,
    userName: 'Kath Putt',
    email: 'kputt2h@homestead.com',
    createdAt: '2024-05-25T09:49:39Z',
  },
  {
    _id: 91,
    userName: 'Betsey Drew-Clifton',
    email: 'bdrewclifton2i@blogs.com',
    createdAt: '2024-05-10T00:59:41Z',
  },
  {
    _id: 92,
    userName: 'Adorne Garlic',
    email: 'agarlic2j@aboutads.info',
    createdAt: '2024-06-26T02:19:57Z',
  },
  {
    _id: 93,
    userName: 'Tory Eynald',
    email: 'teynald2k@purevolume.com',
    createdAt: '2023-09-28T06:12:37Z',
  },
  {
    _id: 94,
    userName: 'Erika Zoren',
    email: 'ezoren2l@cam.ac.uk',
    createdAt: '2024-04-24T22:54:31Z',
  },
  {
    _id: 95,
    userName: 'Rene Feld',
    email: 'rfeld2m@tripadvisor.com',
    createdAt: '2024-08-13T21:49:53Z',
  },
  {
    _id: 96,
    userName: 'Tammy Burborough',
    email: 'tburborough2n@360.cn',
    createdAt: '2024-05-23T00:48:09Z',
  },
  {
    _id: 97,
    userName: 'Prudence Care',
    email: 'pcare2o@dedecms.com',
    createdAt: '2023-08-29T13:00:38Z',
  },
  {
    _id: 98,
    userName: 'Chelsie Gothard',
    email: 'cgothard2p@digg.com',
    createdAt: '2024-04-15T04:56:44Z',
  },
  {
    _id: 99,
    userName: 'Helena Denzilow',
    email: 'hdenzilow2q@patch.com',
    createdAt: '2024-05-15T00:12:00Z',
  },
  {
    _id: 100,
    userName: 'Alexandra Splaven',
    email: 'asplaven2r@accuweather.com',
    createdAt: '2024-07-14T01:14:22Z',
  },
];

export default function Tasks() {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header sticky>
        <h1 className="text-2xl font-bold tracking-tight">Transactions</h1>
        <UserNav />
      </Layout.Header>

      <Layout.Body>
        <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
          <DataTable data={data} columns={columns} />
        </div>
      </Layout.Body>
    </Layout>
  );
}
