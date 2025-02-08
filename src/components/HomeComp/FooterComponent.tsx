import { useState, useEffect } from "react";

export function FooterComponent(){
    
       const [ showDiv, setShowDiv] = useState<boolean>(false);
        
    
        useEffect(() => {
            const mediaQuery = window.matchMedia("(min-width: 1200px)");
    
            const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setShowDiv(event.matches);
            
        };
    
            setShowDiv(mediaQuery.matches);
            
    
            mediaQuery.addEventListener("change", handleMediaQueryChange);
            
            return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
        }, []);

    return(
        <footer className="footerContainer">
            <div className="footerInfos">
                <div>
                    
                    <img src="src/assets/imgs/LootWhite.png" alt="" />
                    <h3>Nos Contate</h3>
                    <div >
                        <div>
                            <span>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.7227 15.0482C16.4672 14.9169 15.1945 14.2935 14.9578 14.2091C14.7211 14.1201 14.5477 14.0779 14.3766 14.3404C14.2031 14.6005 13.7109 15.1794 13.5563 15.3552C13.4063 15.5287 13.2539 15.5498 12.9984 15.4208C11.4797 14.6615 10.4836 14.0662 9.48282 12.3482C9.21797 11.8912 9.74766 11.924 10.2422 10.9373C10.3266 10.7638 10.2844 10.6162 10.2188 10.4849C10.1531 10.3537 9.63751 9.08335 9.42188 8.56538C9.21329 8.06147 8.99766 8.13179 8.84063 8.12241C8.69063 8.11304 8.51954 8.11304 8.3461 8.11304C8.17266 8.11304 7.89376 8.17866 7.65704 8.43413C7.42032 8.69429 6.75235 9.32007 6.75235 10.5904C6.75235 11.8607 7.67813 13.0912 7.80469 13.2646C7.93594 13.438 9.62579 16.0443 12.2203 17.1669C13.8609 17.8748 14.5031 17.9357 15.3234 17.8138C15.8227 17.7388 16.8516 17.1904 17.0648 16.5834C17.2781 15.9787 17.2781 15.4607 17.2148 15.3529C17.1516 15.238 16.9781 15.1724 16.7227 15.0482Z" fill="white"/>
                            <path d="M21.6844 8.91929C21.1547 7.66069 20.3953 6.53101 19.4273 5.56069C18.4594 4.59272 17.3297 3.83101 16.0687 3.30366C14.7797 2.76226 13.4109 2.48804 12 2.48804H11.9531C10.5328 2.49507 9.15703 2.77632 7.86328 3.32944C6.61406 3.86382 5.49375 4.62319 4.53515 5.59116C3.57656 6.55913 2.82421 7.68413 2.3039 8.93804C1.76484 10.2365 1.49296 11.6169 1.5 13.0373C1.50703 14.6638 1.89609 16.2787 2.625 17.7224V21.2849C2.625 21.8802 3.10781 22.363 3.70312 22.363H7.26796C8.71171 23.0919 10.3266 23.481 11.9531 23.488H12.0023C13.4062 23.488 14.768 23.2162 16.05 22.6841C17.3039 22.1615 18.4312 21.4115 19.3969 20.4529C20.3648 19.4943 21.1266 18.374 21.6586 17.1248C22.2117 15.831 22.493 14.4552 22.5 13.0349C22.507 11.6076 22.2305 10.2224 21.6844 8.91929ZM18.143 19.1849C16.5 20.8115 14.3203 21.7068 12 21.7068H11.9602C10.5469 21.6998 9.14296 21.3482 7.90312 20.6873L7.70625 20.5818H4.40625V17.2818L4.30078 17.0849C3.63984 15.8451 3.28828 14.4412 3.28125 13.0279C3.27187 10.6912 4.16484 8.49741 5.80312 6.84507C7.43906 5.19272 9.62578 4.27866 11.9625 4.26929H12.0023C13.1742 4.26929 14.3109 4.49663 15.382 4.94663C16.4273 5.38491 17.3648 6.01538 18.1711 6.82163C18.975 7.62554 19.6078 8.56538 20.0461 9.61069C20.5008 10.6935 20.7281 11.8419 20.7234 13.0279C20.7094 15.3623 19.793 17.549 18.143 19.1849Z" fill="white"/>
                            </svg>
                            </span>
                            <p>Nosso Whatsapp</p>
                        </div>
                        <p>+55 16 9999-8888</p>
                    </div>
                        
                    <div >
                        <span>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5317 11.4604C14.5208 15.4484 15.4258 10.8348 17.9656 13.3728C20.4143 15.8208 21.8216 16.3112 18.7192 19.4128C18.3306 19.7251 15.8616 23.4823 7.1846 14.8077C-1.49348 6.13204 2.26158 3.66048 2.57397 3.27199C5.68387 0.161883 6.16586 1.57742 8.61449 4.02537C11.1544 6.56453 6.54266 7.47245 10.5317 11.4604Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.353 5.03101C15.124 5.37501 16.508 6.76001 16.853 8.53101" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        </span>
                        <p>Nos ligue</p>
                        <p>+55 16 9999-8888</p>
                    </div>
                        
                </div>
                {
                    showDiv &&
                    <>
                    <div>
                    <h3>Categorias populares</h3>
                    <div className="slashFooter"></div>
                    <ul>
                        <li>Celulares</li>
                        <li>Eletrônicos</li>
                        <li>Móveis</li>
                        <li>Eletrodomésticos</li>
                        <li>Decoração</li>
                        <li>Relógios</li>
                        <li>Cosméticos</li>
                        <li>Acessórios</li>
                    </ul>
                </div>
                <div>
                    <h3>Cliente</h3>
                    <div className="slashFooter"></div>
                    <ul>
                        <li>Sobre Nós</li>
                        <li>Termos e condições</li>
                        <li>FAQ</li>
                        <li>Política de privacidade</li>
                        <li>Política de devolução</li>
                    </ul>
                </div>
                
                </>
                }
            </div>
            <div style={{width: '100%', height: '0px', border: '1px solid rgba(255, 186, 169, 1)', margin: '20px'}}></div>
            <div style={{textAlign: 'center', }}>
                <p>2025 © Todos os direitos reservados. Loot Intermediação de Negócios LTDA. CNPJ 235.5435.543.6356-43</p>
            </div>
        </footer>
    )
}