import BanerMarketing from "./BanerMarketingBlockFunc";
import NewsBlocks from "./NewsBlocksFunc";
import Search from "./SearchBlockFunc";
import YandexAdvertising from "./YandexAdvertisingBlockFunc";
import InfoBlocks from "./InfoBlocksFunc";

/**
 * The main search page
 * 
 * @param {date} // is the main source of content
 * @param {src, url, href} // link to image or resource
 * @param {alt, title, name, type, text, bold, time, program, chanel, category} // String
 * @param {cost, difference, temp} // Number
 * @param {icon} // Symbol
 * 
 * @public
 */

export default function YandexPage() {

    const data = {
        news: [
            {
                favicon: {
                    src: '',
                    alt: '',
                },
                title: '',
            }
        ],
        assets: [{
            name: '',
            cost: '',
            difference: '',
        }],
        advertising: {
            text: '', 
            src: '', 
            title: '',
        },
        baner: {
            href: '', 
            src: '', 
            alt: '',
        },
        infoBlocks: [
            {
                type: 'wether',
                title: 'Погода',
                href: '', 
                url: '', 
                temp: '', 
                text: '',
            },
            {
                type: 'visit',
                title: 'Посещаемое',
                listLink: [
                    {
                        href: '',
                        bold: '',
                        text: '',
                    },
                    {
                        href: '',
                        bold: '',
                        text: '',
                    },
                    {
                        href: '',
                        bold: '',
                        text: '',
                    },
                ], 
            },
            {
                type: 'map',
                title: 'Карта Германии',
                listLink: [
                    {
                        href: '',
                        text: '',
                    },
                ], 
            },
            {
                type: 'TVprogram',
                title: 'Телепрограмма',
                listLink: [
                    {
                        href: '',
                        time: '',
                        program: '',
                        chanel: '',
                    },
                    {
                        href: '',
                        time: '',
                        program: '',
                        chanel: '',
                    },
                    {
                        href: '',
                        time: '',
                        program: '',
                        chanel: '',
                    },
                ], 
            },
            {
                type: 'broadcast',
                title: 'Эфир',
                listLink: [
                    {
                        href: '',
                        icon: '',
                        name: '',
                        category: '',
                    },
                    {
                        href: '',
                        icon: '',
                        name: '',
                        category: '',
                    },
                    {
                        href: '',
                        icon: '',
                        name: '',
                        category: '',
                    },
                ], 
            },
        ]
    }

    return (
        <>
            <div className="page-top">
                <NewsBlocks {...data}>
                    {data.news.map(item => <li key={item.title}><img src={item.favicon.src} alt={item.favicon.alt}/><a>{item.title}</a></li>)}
                </NewsBlocks>
                <YandexAdvertising advertising={data.advertising}/>
            </div>
            <Search>

            </Search>
            <div className="page-bottom">
                <BanerMarketing baner={data.baner}/>
                <InfoBlocks {...data}>

                </InfoBlocks>
            </div>
            
        </>
    )
}