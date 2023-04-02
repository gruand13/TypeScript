let msg: "Hello" = "Hello";
msg = 'Hello';

const port3000: number =3000;
const port3001: number =3001;



//литеральнй тип (четкое значение)

function startServer(
    protocol: "http" | "https",
     port: 3000 | 3001
     ): 'Server started'{
        if (port===port3000 || port === port3001){
            console.log(`Server started on ${protocol}://server: ${port}`);

        } else {
            console.error("Invalid port");
        }

    return "Server started";
}

startServer('https', 3001);

type AnimationTamingFunc = 'ease' | 'ease-out' | 'ease-in';
type AnimationId = string | number;

function createAnimation (
    id: AnimationId, 
    animationName: string, 
    timingFunc: AnimationTamingFunc = 'ease',
    duration: number,
    iterCount: 'infinite' | number
    ): void{
    // const elem = document.querySelector(`#${id}`) as HTMLElement;
    // if (elem){
        console.log(`${animationName} ${timingFunc} ${duration} ${iterCount}`);
        // elem.style.animation = `${animationName} ${timingFunc} ${duration} ${iterCount}`;
    // }
}
 createAnimation('id', 'fade', 'ease-in', 5, 'infinite');