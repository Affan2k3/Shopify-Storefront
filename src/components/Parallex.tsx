import { ParallaxBanner } from 'react-scroll-parallax';
import { parallex } from './Databse'


interface parallexType {
    subTitle: string,
    title: string,
    desc: string,
}

const isBrowser = (): boolean => typeof window !== "undefined";

if (isBrowser()) {
    window.addEventListener('scroll', () => {

        let top = document.querySelectorAll('.top');

        for (let i = 0; i < top.length; i++) {
            let windowheight = window.innerHeight;
            let revealtop = top[i].getBoundingClientRect().top;
            let revealpoint = -150;

            if (revealtop < windowheight - revealpoint) {
                top[i].classList.add('topActive');
            }
            else {
                top[i].classList.remove('topActive');
            }


        }
    });
}

const parallexData: parallexType = parallex;

export default function Parallex() {
    return (
        <ParallaxBanner
            layers={[{ image: '/images/parallex.webp', speed: -25 }]}
            className=" h-[100%] ml:min-h-[650px] min-h-[500px]"
        >
            <div className='max-w-7xl mx-auto '>
                <div className='ml:overflow-y-hidden absolute md:bottom-auto bottom-0 md:m-12 m-2 h-[20rem] w-[95%] md:w-[365px]'>
                    <div className="top absolute bottom-2 bg-white p-[40px] md:ml-0 ml:ml-4 md:w-[365px]">
                        <h1 className=' ml:text-lg text-base tracking-wider'>{parallexData.subTitle}</h1>
                        <h1 className=' ml:text-4xl text-3xl font-bold pt-2 '>{parallexData.title}</h1>
                        <p className=' ml:text-lg text-base pt-3'>{parallexData.desc}</p>
                    </div>
                </div>
            </div>
        </ParallaxBanner>
    )
}