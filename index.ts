// type Config = {protocol:"http" | "https"; port:3000 | 3001};

interface Config {
    protocol:"http" | "https";
    port:3000 | 3001;
    log: (msg: string) => void
}
// type Role ={
//     role: string
// }

interface Role {
   role: string;

}

interface ConfigWithRole extends Config, Role {}
// type ConfigWithRole = Config & Role;

const serverConfig: ConfigWithRole = {
    protocol: 'https',
    port: 3001,
   role: 'admin',
   log:(msg: string):void => console.log(msg)
}

// const backupConfig : ConfigWithRole = {
//     protocol: 'http',
//     port: 3000,
//     role: 'sysadmin'
// }

type StartFunction = (
    protocol: "http" | "https",
     port: 3000 | 3001,
    log: (msg: string) => void
) => string;



const startServer: StartFunction = (
    protocol: "http" | "https",
    port: 3000 | 3001,
    log: (msg: string) => void
    ): 'Server started'=>{
       
            log(`Server started on ${protocol}://server: ${port}`);

    

    return "Server started";
}

// startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);

// type AnimationTamingFunc = 'ease' | 'ease-out' | 'ease-in';
// type AnimationId = string | number;

// function createAnimation (
//     id: AnimationId, 
//     animationName: string, 
//     timingFunc: AnimationTamingFunc = 'ease',
//     duration: number,
//     iterCount: 'infinite' | number
//     ): void{
//     // const elem = document.querySelector(`#${id}`) as HTMLElement;
//     // if (elem){
//         console.log(`${animationName} ${timingFunc} ${duration} ${iterCount}`);
//         // elem.style.animation = `${animationName} ${timingFunc} ${duration} ${iterCount}`;
//     // }
// }
//  createAnimation('id', 'fade', 'ease-in', 5, 'infinite');

interface Styles {
    [key: string]: string
}


const styles: Styles = {
    position: "absolute",
    top: "20px",
    left: "50px"
}