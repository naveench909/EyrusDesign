import React from 'react'
import styles from '../../styles/Navbar.module.css'

//components
import Dropdown from './Dropdown'
import Menu from './Menu';
import Profile from './Profile';

import { useGlobalContext } from '../context'

function Navbar() {

    const { showMenuModal ,showModal } = useGlobalContext();

    return (
        <div className={styles.container}>
            <div className={styles.first}>
            <div className={styles.logo}> 
                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.0306 22.4923C12.9562 22.4923 10.4615 20.0056 10.4615 16.9331C10.4615 13.8641 12.9562 11.3738 16.0306 11.3738C19.1086 11.3738 21.5997 13.8641 21.5997 16.9331C21.5997 20.002 19.105 22.4923 16.0306 22.4923ZM32 15.7723C31.9064 15.3806 31.8236 14.9817 31.7372 14.5793C29.0804 15.1399 26.4453 15.722 23.8065 16.297C23.0865 16.1281 22.3449 15.9772 21.6141 15.8155C22.0533 15.4992 22.5429 15.1758 23.0109 14.8524C23.1693 14.741 23.3277 14.5828 23.4825 14.5254C23.6265 14.4786 23.8065 14.475 23.9757 14.4427C26.4417 13.9863 29.012 13.5371 31.4348 13.0915C31.3772 12.6747 31.2872 12.2901 31.226 11.8769C29.4548 12.1823 27.7089 12.5129 25.9377 12.8184C27.3993 11.787 28.8896 10.7844 30.344 9.74947C30.1028 9.42245 29.8724 9.08106 29.642 8.74326C27.5433 10.1879 25.4733 11.6181 23.3781 13.0699C23.2449 13.1598 23.0865 13.3215 22.9569 13.3646C22.7913 13.4185 22.5861 13.4293 22.4133 13.4581C21.8445 13.5551 21.3189 13.6593 20.7645 13.7527C21.1101 13.2029 21.4737 12.6495 21.8229 12.0961C21.9453 11.9056 22.0065 11.8373 22.1901 11.7188C24.3789 10.3029 26.6613 8.88342 28.7888 7.47832C28.5548 7.14052 28.3568 6.77038 28.1084 6.45055C26.6073 7.41723 25.1061 8.38391 23.5977 9.34339C24.5661 7.84127 25.5345 6.33556 26.5029 4.82985C26.1537 4.60704 25.8081 4.37705 25.4517 4.15784C24.1269 6.24931 22.6941 8.42343 21.3477 10.5365C21.2685 10.6586 21.1641 10.8743 21.0741 10.9677C21.0201 11.0216 20.9157 11.0611 20.8329 11.115C20.2713 11.478 19.7134 11.8481 19.1734 12.1715C19.2706 11.6181 19.375 11.0683 19.4758 10.5293C19.5118 10.346 19.5082 10.134 19.5694 9.97227C19.591 9.91478 19.6558 9.83212 19.7062 9.76384C21.2253 7.61128 22.6941 5.4731 24.1845 3.32413C23.8497 3.08695 23.5149 2.84618 23.1657 2.62338C22.1469 4.07879 21.1209 5.5845 20.1021 7.01115C20.4225 5.25748 20.7357 3.49662 21.0561 1.74295C20.6493 1.66749 20.2389 1.59202 19.8285 1.52374C19.3822 3.9566 18.9358 6.52243 18.4858 8.98044C18.4534 9.15293 18.4426 9.34699 18.3922 9.48354C18.367 9.55542 18.2914 9.63447 18.2338 9.71353C17.8558 10.2598 17.467 10.8275 17.0998 11.3163C16.9594 10.6802 16.8262 10.0441 16.6894 9.41167C16.6678 9.31824 16.6102 9.19246 16.6282 9.117C17.1466 6.54758 17.8198 3.80567 18.349 1.22907C17.9458 1.13923 17.5462 1.04579 17.1322 0.966736C16.7506 2.70963 16.3798 4.45971 15.9874 6.19182C15.6022 4.45611 15.2278 2.70244 14.8426 0.966736C14.4322 1.05298 14.011 1.12845 13.6258 1.23985C14.1694 3.64037 14.695 6.199 15.2422 8.63546C15.2818 8.81154 15.3466 8.99841 15.3466 9.13856C15.343 9.30746 15.271 9.50151 15.2314 9.68119C15.1054 10.2454 14.9974 10.7808 14.875 11.3271C14.5618 10.8886 14.2234 10.4035 13.8994 9.94352C13.8058 9.81056 13.633 9.60573 13.5862 9.46198C13.5394 9.32183 13.5214 9.14215 13.4926 8.98044C13.0282 6.50086 12.607 3.94582 12.1499 1.52374C11.7431 1.59561 11.3363 1.66749 10.9331 1.74295C11.2391 3.5074 11.5667 5.2503 11.8763 7.01115C10.8503 5.55575 9.83508 4.09316 8.82349 2.62338C8.46709 2.84618 8.1251 3.08336 7.79391 3.33491C9.25189 5.40482 10.6667 7.48551 12.1246 9.5662C12.2038 9.6776 12.3802 9.87165 12.4198 9.98665C12.445 10.0621 12.445 10.1663 12.463 10.2598C12.5782 10.9102 12.7006 11.5499 12.8086 12.1859C12.2578 11.8338 11.6999 11.4708 11.1491 11.1186C11.0663 11.0647 10.9619 11.0216 10.9079 10.9605C10.8107 10.8563 10.7279 10.6838 10.6343 10.5401C9.26988 8.41984 7.8731 6.23135 6.52312 4.16144C6.18832 4.39861 5.81753 4.59626 5.49353 4.84422C6.44752 6.34634 7.4483 7.85924 8.38069 9.34699C6.87591 8.38031 5.38194 7.40286 3.85915 6.45415C3.64676 6.80632 3.41636 7.14412 3.20036 7.4927C5.28113 8.8367 7.48791 10.231 9.59028 11.6002C9.73428 11.6936 9.92508 11.7763 10.0223 11.8733C10.1375 11.9919 10.2275 12.1895 10.3247 12.344C10.6343 12.8256 10.9475 13.2892 11.2175 13.7563C10.6703 13.6557 10.1195 13.5623 9.56868 13.4616C9.38868 13.4293 9.18348 13.4185 9.02149 13.3574C8.88829 13.3071 8.74069 13.167 8.6039 13.0735C6.49792 11.6217 4.44595 10.1771 2.35077 8.74686C2.12757 9.09544 1.87918 9.41527 1.65958 9.76384C3.11036 10.788 4.62594 11.805 6.04432 12.822C4.28395 12.5129 2.53797 12.1859 0.777589 11.8805C0.69839 12.2794 0.626392 12.6854 0.557993 13.0951C2.97716 13.5407 5.56553 13.9935 8.0171 14.4463C8.1935 14.4786 8.3987 14.4786 8.5319 14.5289C8.5967 14.5541 8.68309 14.6332 8.76229 14.6871C9.30588 15.0608 9.86748 15.4597 10.3679 15.819C9.64068 15.9843 8.89909 16.1353 8.1755 16.3006C5.54033 15.722 2.90876 15.1434 0.251997 14.5828C0.176398 14.9925 0.0719991 15.377 0 15.7867C1.74238 16.1784 3.51356 16.5378 5.24514 16.9367C3.48476 17.3032 1.75318 17.6949 0 18.0686C0.079199 18.4855 0.1692 18.8808 0.262798 19.2833C2.51997 18.7981 4.90674 18.2663 7.18911 17.7847C7.52391 17.7129 7.8479 17.6158 8.1755 17.5655C8.25469 17.5547 8.3735 17.6122 8.4599 17.6302C9.11509 17.7704 9.73427 17.9069 10.3787 18.0399C9.96107 18.3561 9.43908 18.6903 8.99268 19.003C8.83429 19.1144 8.6867 19.2437 8.5319 19.3264C8.5283 19.33 8.51029 19.3372 8.51029 19.3372C8.3699 19.3839 8.1791 19.3947 8.0171 19.4198C5.54393 19.8367 2.99516 20.347 0.557993 20.7602C0.626392 21.1735 0.70199 21.5796 0.777589 21.9856C2.53797 21.6658 4.30195 21.3496 6.06592 21.0333C4.60074 22.0575 3.12836 23.0709 1.65958 24.0915C1.88638 24.4401 2.11677 24.7886 2.37237 25.1085C4.45315 23.6639 6.53032 22.2372 8.6039 20.7818C8.73709 20.6884 8.90629 20.5446 9.03589 20.4979C9.19429 20.4404 9.40308 20.426 9.58308 20.3937C10.1483 20.2895 10.6919 20.2068 11.2391 20.099C10.8791 20.6416 10.5371 21.2058 10.1807 21.7557C10.0583 21.9461 10.0007 22.0108 9.81348 22.133C7.6247 23.5525 5.35313 24.9755 3.20396 26.3626C3.41636 26.722 3.65756 27.0526 3.86275 27.412C5.37833 26.4669 6.88671 25.4571 8.3843 24.5299C7.42671 26.032 6.45472 27.5198 5.49713 29.0255C5.83193 29.2591 6.18472 29.4783 6.53752 29.6939C7.8839 27.6168 9.28428 25.4175 10.6523 23.3153C10.7459 23.1715 10.8251 22.9811 10.9259 22.884C10.9835 22.8265 11.0843 22.7906 11.1671 22.7367C11.7179 22.3809 12.2723 22.0072 12.8158 21.6874C12.715 22.2336 12.6214 22.7834 12.5206 23.3332C12.4882 23.5129 12.4774 23.7213 12.4162 23.8795C12.3658 24.0088 12.2291 24.1598 12.1319 24.2963C10.6631 26.3914 9.24469 28.4541 7.8011 30.5384C8.1431 30.772 8.4779 31.0091 8.81989 31.2391C9.83868 29.7801 10.8647 28.2744 11.8834 26.8514C11.5739 28.6122 11.2427 30.3515 10.9403 32.1196C11.3543 32.1807 11.7395 32.2705 12.1571 32.328C12.6394 29.6795 13.1218 27.0275 13.5934 24.3682C14.029 23.7681 14.4574 23.1068 14.8858 22.5355C15.0118 23.2578 15.2458 23.9873 15.3574 24.7024C15.3574 24.7096 15.3574 24.7168 15.3574 24.724C15.3538 24.8677 15.289 25.0438 15.253 25.2163C14.7094 27.6779 14.1586 30.2365 13.6474 32.6335C14.0506 32.7197 14.4538 32.8059 14.8534 32.8958C15.2422 31.1529 15.6022 29.3848 16.009 27.6563C16.3762 29.4136 16.7686 31.1421 17.143 32.8958C17.5498 32.8095 17.9494 32.7161 18.3598 32.6335C17.8306 30.215 17.2834 27.6599 16.7434 25.2163C16.7038 25.0438 16.6354 24.8497 16.639 24.7132C16.6426 24.5479 16.7146 24.343 16.7542 24.167C16.873 23.6135 17.0026 23.0745 17.1106 22.5247C17.4706 23.0386 17.8774 23.6064 18.2446 24.1382C18.2986 24.2173 18.3994 24.3359 18.4138 24.4005C18.8854 26.9592 19.3642 29.7478 19.8393 32.328C20.2569 32.2705 20.6457 32.1807 21.0561 32.1196C20.7645 30.3803 20.4225 28.5979 20.1129 26.8406C21.1497 28.2996 22.1541 29.7837 23.1873 31.2391C23.5185 31.002 23.8605 30.772 24.1953 30.5384C22.7697 28.4397 21.3045 26.3878 19.861 24.2963C19.7674 24.1598 19.6234 24.0016 19.5766 23.8687C19.5226 23.707 19.5046 23.5093 19.4722 23.3332C19.3678 22.769 19.2886 22.2264 19.177 21.6802C19.6594 21.9677 20.1201 22.2875 20.5953 22.5894C20.7537 22.69 20.9553 22.769 21.0777 22.8948C21.1713 22.9918 21.2577 23.1715 21.3513 23.3153C22.7157 25.4355 24.1161 27.6168 25.4553 29.6939C25.8153 29.4783 26.1609 29.2519 26.5065 29.0255C25.5453 27.5306 24.5481 26.0105 23.6157 24.5191C23.6157 24.5191 23.6157 24.5191 23.6193 24.5191C25.1205 25.4858 26.6217 26.4525 28.13 27.4084C28.3424 27.0526 28.58 26.722 28.7924 26.359C26.5173 24.9072 24.2529 23.4446 21.9741 21.9928C21.5889 21.3532 21.1353 20.7279 20.7789 20.0954C21.3297 20.196 21.8769 20.3003 22.4169 20.3973C22.6005 20.4332 22.8057 20.4332 22.9713 20.4907C23.0973 20.5338 23.2593 20.6848 23.3889 20.7746C25.4985 22.2228 27.5397 23.6854 29.642 25.1013C29.876 24.7635 30.1136 24.4293 30.344 24.0843C28.8752 23.0745 27.3741 22.0395 25.9377 21.0262C27.6945 21.346 29.4584 21.6586 31.2152 21.9785C31.2944 21.576 31.3736 21.1699 31.4348 20.753C28.9976 20.311 26.4273 19.8618 23.9649 19.4126C23.7957 19.3803 23.6085 19.3695 23.4717 19.3156C23.4645 19.3156 23.4573 19.3192 23.4501 19.3156C23.1477 19.1251 22.8381 18.8952 22.5285 18.6759C22.2117 18.4567 21.9021 18.2375 21.6249 18.0255C22.1757 17.9177 22.7265 17.7847 23.2629 17.6697C23.4321 17.6338 23.6697 17.5547 23.8209 17.5547C23.9541 17.5547 24.1449 17.623 24.3141 17.659C26.7801 18.2016 29.3252 18.7478 31.7444 19.2725C31.82 18.8628 31.9352 18.446 31.9964 18.0578C30.2504 17.6805 28.4972 17.3068 26.7621 16.9151C28.4972 16.5378 30.272 16.1784 32 15.7723Z" fill="url(#paint0_radial_3:11299)"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.0306 22.5256C12.9562 22.5256 10.4615 20.0388 10.4615 16.9663C10.4615 13.8974 12.9562 11.407 16.0306 11.407C19.1086 11.407 21.5997 13.8974 21.5997 16.9663C21.5997 20.0352 19.105 22.5256 16.0306 22.5256ZM32 15.8056C31.9064 15.4139 31.8236 15.015 31.7372 14.6125C29.0804 15.1731 26.4453 15.7553 23.8065 16.3303C23.0865 16.1614 22.3449 16.0104 21.6141 15.8487C22.0533 15.5325 22.5429 15.2091 23.0109 14.8856C23.1693 14.7742 23.3277 14.6161 23.4825 14.5586C23.6265 14.5119 23.8065 14.5083 23.9757 14.476C26.4417 14.0196 29.012 13.5704 31.4348 13.1248C31.3772 12.7079 31.2872 12.3234 31.226 11.9101C29.4548 12.2156 27.7089 12.5462 25.9377 12.8517C27.3993 11.8203 28.8896 10.8177 30.344 9.78273C30.1028 9.45572 29.8724 9.11433 29.642 8.77653C27.5433 10.2212 25.4733 11.6514 23.3781 13.1032C23.2449 13.1931 23.0865 13.3548 22.9569 13.3979C22.7913 13.4518 22.5861 13.4626 22.4133 13.4913C21.8445 13.5883 21.3189 13.6926 20.7645 13.786C21.1101 13.2362 21.4737 12.6828 21.8229 12.1293C21.9453 11.9389 22.0065 11.8706 22.1901 11.752C24.3789 10.3361 26.6613 8.91668 28.7888 7.51159C28.5548 7.17379 28.3568 6.80365 28.1084 6.48382C26.6073 7.45049 25.1061 8.41717 23.5977 9.37666C24.5661 7.87454 25.5345 6.36882 26.5029 4.86311C26.1537 4.64031 25.8081 4.41032 25.4517 4.19111C24.1269 6.28258 22.6941 8.4567 21.3477 10.5697C21.2685 10.6919 21.1641 10.9075 21.0741 11.001C21.0201 11.0549 20.9157 11.0944 20.8329 11.1483C20.2713 11.5113 19.7134 11.8814 19.1734 12.2048C19.2706 11.6514 19.375 11.1016 19.4758 10.5625C19.5118 10.3793 19.5082 10.1672 19.5694 10.0055C19.591 9.94804 19.6558 9.86539 19.7062 9.79711C21.2253 7.64455 22.6941 5.50636 24.1845 3.3574C23.8497 3.12022 23.5149 2.87945 23.1657 2.65665C22.1469 4.11205 21.1209 5.61776 20.1021 7.04442C20.4225 5.29075 20.7357 3.52989 21.0561 1.77622C20.6493 1.70075 20.2389 1.62528 19.8285 1.55701C19.3822 3.98987 18.9358 6.55569 18.4858 9.01371C18.4534 9.1862 18.4426 9.38025 18.3922 9.51681C18.367 9.58868 18.2914 9.66774 18.2338 9.7468C17.8558 10.293 17.467 10.8608 17.0998 11.3495C16.9594 10.7135 16.8262 10.0774 16.6894 9.44494C16.6678 9.3515 16.6102 9.22573 16.6282 9.15026C17.1466 6.58085 17.8198 3.83894 18.349 1.26233C17.9458 1.17249 17.5462 1.07906 17.1322 1C16.7506 2.74289 16.3798 4.49297 15.9874 6.22508C15.6022 4.48938 15.2278 2.7357 14.8426 1C14.4322 1.08625 14.011 1.16171 13.6258 1.27311C14.1694 3.67363 14.695 6.23227 15.2422 8.66872C15.2818 8.84481 15.3466 9.03167 15.3466 9.17182C15.343 9.34072 15.271 9.53478 15.2314 9.71446C15.1054 10.2786 14.9974 10.8141 14.875 11.3603C14.5618 10.9219 14.2234 10.4368 13.8994 9.97679C13.8058 9.84382 13.633 9.63899 13.5862 9.49525C13.5394 9.3551 13.5214 9.17542 13.4926 9.01371C13.0282 6.53413 12.607 3.97909 12.1499 1.55701C11.7431 1.62888 11.3363 1.70075 10.9331 1.77622C11.2391 3.54067 11.5667 5.28356 11.8763 7.04442C10.8503 5.58902 9.83508 4.12642 8.82349 2.65665C8.46709 2.87945 8.1251 3.11662 7.79391 3.36818C9.25189 5.43808 10.6667 7.51877 12.1246 9.59946C12.2038 9.71086 12.3802 9.90492 12.4198 10.0199C12.445 10.0954 12.445 10.1996 12.463 10.293C12.5782 10.9435 12.7006 11.5831 12.8086 12.2192C12.2578 11.867 11.6999 11.5041 11.1491 11.1519C11.0663 11.098 10.9619 11.0549 10.9079 10.9938C10.8107 10.8896 10.7279 10.7171 10.6343 10.5733C9.26988 8.45311 7.8731 6.26461 6.52312 4.1947C6.18832 4.43188 5.81753 4.62953 5.49353 4.87748C6.44752 6.3796 7.4483 7.89251 8.38069 9.38025C6.87591 8.41358 5.38193 7.43612 3.85915 6.48741C3.64676 6.83958 3.41636 7.17738 3.20036 7.52596C5.28113 8.86996 7.48791 10.2643 9.59028 11.6334C9.73428 11.7269 9.92508 11.8095 10.0223 11.9065C10.1375 12.0251 10.2275 12.2228 10.3247 12.3773C10.6343 12.8588 10.9475 13.3224 11.2175 13.7896C10.6703 13.689 10.1195 13.5955 9.56868 13.4949C9.38868 13.4626 9.18348 13.4518 9.02149 13.3907C8.88829 13.3404 8.74069 13.2002 8.6039 13.1068C6.49792 11.655 4.44595 10.2104 2.35077 8.78012C2.12758 9.1287 1.87918 9.44853 1.65958 9.79711C3.11036 10.8213 4.62594 11.8383 6.04432 12.8553C4.28395 12.5462 2.53797 12.2192 0.777589 11.9137C0.69839 12.3126 0.626392 12.7187 0.557993 13.1284C2.97716 13.574 5.56553 14.0268 8.0171 14.4796C8.1935 14.5119 8.3987 14.5119 8.5319 14.5622C8.5967 14.5874 8.68309 14.6664 8.76229 14.7203C9.30588 15.0941 9.86748 15.4929 10.3679 15.8523C9.64068 16.0176 8.89909 16.1685 8.1755 16.3338C5.54033 15.7553 2.90876 15.1767 0.251997 14.6161C0.176398 15.0258 0.0719991 15.4103 0 15.82C1.74238 16.2117 3.51356 16.571 5.24514 16.9699C3.48476 17.3365 1.75318 17.7282 0 18.1019C0.079199 18.5188 0.1692 18.914 0.262798 19.3165C2.51997 18.8314 4.90674 18.2995 7.18911 17.818C7.52391 17.7461 7.8479 17.6491 8.1755 17.5988C8.2547 17.588 8.3735 17.6455 8.4599 17.6635C9.11509 17.8036 9.73428 17.9402 10.3787 18.0731C9.96107 18.3894 9.43908 18.7236 8.99268 19.0362C8.83429 19.1476 8.6867 19.277 8.5319 19.3597C8.5283 19.3632 8.51029 19.3704 8.51029 19.3704C8.3699 19.4171 8.1791 19.4279 8.0171 19.4531C5.54393 19.8699 2.99516 20.3802 0.557993 20.7935C0.626392 21.2068 0.70199 21.6128 0.777589 22.0189C2.53797 21.6991 4.30195 21.3828 6.06592 21.0666C4.60074 22.0908 3.12836 23.1042 1.65958 24.1248C1.88638 24.4733 2.11677 24.8219 2.37237 25.1417C4.45314 23.6971 6.53032 22.2705 8.6039 20.8151C8.73709 20.7216 8.90629 20.5779 9.03589 20.5312C9.19429 20.4737 9.40308 20.4593 9.58308 20.4269C10.1483 20.3227 10.6919 20.2401 11.2391 20.1323C10.8791 20.6749 10.5371 21.2391 10.1807 21.7889C10.0583 21.9794 10.0007 22.0441 9.81348 22.1662C7.6247 23.5857 5.35313 25.0088 3.20396 26.3959C3.41636 26.7553 3.65756 27.0859 3.86275 27.4452C5.37833 26.5001 6.88671 25.4903 8.3843 24.5632C7.42671 26.0653 6.45472 27.553 5.49713 29.0588C5.83193 29.2923 6.18472 29.5115 6.53752 29.7272C7.8839 27.6501 9.28428 25.4508 10.6523 23.3485C10.7459 23.2048 10.8251 23.0143 10.9259 22.9173C10.9835 22.8598 11.0843 22.8239 11.1671 22.77C11.7179 22.4142 12.2723 22.0405 12.8158 21.7206C12.715 22.2669 12.6214 22.8167 12.5206 23.3665C12.4882 23.5462 12.4774 23.7546 12.4162 23.9127C12.3658 24.0421 12.2291 24.193 12.1319 24.3296C10.6631 26.4247 9.24469 28.4874 7.8011 30.5717C8.1431 30.8052 8.4779 31.0424 8.81989 31.2724C9.83868 29.8134 10.8647 28.3077 11.8834 26.8846C11.5739 28.6455 11.2427 30.3848 10.9403 32.1528C11.3543 32.2139 11.7395 32.3038 12.157 32.3613C12.6394 29.7128 13.1218 27.0607 13.5934 24.4015C14.029 23.8013 14.4574 23.1401 14.8858 22.5687C15.0118 23.291 15.2458 24.0205 15.3574 24.7357C15.3574 24.7428 15.3574 24.75 15.3574 24.7572C15.3538 24.901 15.289 25.0771 15.253 25.2495C14.7094 27.7112 14.1586 30.2698 13.6474 32.6667C14.0506 32.753 14.4538 32.8392 14.8534 32.929C15.2422 31.1862 15.6022 29.4181 16.009 27.6896C16.3762 29.4469 16.7686 31.1754 17.143 32.929C17.5498 32.8428 17.9494 32.7494 18.3598 32.6667C17.8306 30.2482 17.2834 27.6932 16.7434 25.2495C16.7038 25.0771 16.6354 24.883 16.639 24.7464C16.6426 24.5811 16.7146 24.3763 16.7542 24.2002C16.873 23.6468 17.0026 23.1078 17.1106 22.5579C17.4706 23.0718 17.8774 23.6396 18.2446 24.1715C18.2986 24.2505 18.3994 24.3691 18.4138 24.4338C18.8854 26.9924 19.3642 29.7811 19.8393 32.3613C20.2569 32.3038 20.6457 32.2139 21.0561 32.1528C20.7645 30.4135 20.4225 28.6311 20.1129 26.8738C21.1497 28.3328 22.1541 29.817 23.1873 31.2724C23.5185 31.0352 23.8605 30.8052 24.1953 30.5717C22.7697 28.473 21.3045 26.4211 19.861 24.3296C19.7674 24.193 19.6234 24.0349 19.5766 23.9019C19.5226 23.7402 19.5046 23.5426 19.4722 23.3665C19.3678 22.8023 19.2886 22.2597 19.177 21.7135C19.6594 22.0009 20.1201 22.3208 20.5953 22.6226C20.7537 22.7233 20.9553 22.8023 21.0777 22.9281C21.1713 23.0251 21.2577 23.2048 21.3513 23.3485C22.7157 25.4688 24.1161 27.6501 25.4553 29.7272C25.8153 29.5115 26.1609 29.2851 26.5065 29.0588C25.5453 27.5638 24.5481 26.0437 23.6157 24.5524C23.6157 24.5524 23.6157 24.5524 23.6193 24.5524C25.1205 25.5191 26.6217 26.4857 28.13 27.4416C28.3424 27.0859 28.58 26.7553 28.7924 26.3923C26.5173 24.9405 24.2529 23.4779 21.9741 22.0261C21.5889 21.3864 21.1353 20.7612 20.7789 20.1287C21.3297 20.2293 21.8769 20.3335 22.4169 20.4305C22.6005 20.4665 22.8057 20.4665 22.9713 20.524C23.0973 20.5671 23.2593 20.718 23.3889 20.8079C25.4985 22.2561 27.5397 23.7187 29.642 25.1346C29.876 24.7968 30.1136 24.4625 30.344 24.1176C28.8752 23.1078 27.3741 22.0728 25.9377 21.0594C27.6945 21.3792 29.4584 21.6919 31.2152 22.0117C31.2944 21.6092 31.3736 21.2032 31.4348 20.7863C28.9976 20.3443 26.4273 19.8951 23.9649 19.4459C23.7957 19.4136 23.6085 19.4028 23.4717 19.3489C23.4645 19.3489 23.4573 19.3525 23.4501 19.3489C23.1477 19.1584 22.8381 18.9284 22.5285 18.7092C22.2117 18.49 21.9021 18.2708 21.6249 18.0588C22.1757 17.951 22.7265 17.818 23.2629 17.703C23.4321 17.6671 23.6697 17.588 23.8209 17.588C23.9541 17.588 24.1449 17.6563 24.3141 17.6922C26.7801 18.2349 29.3252 18.7811 31.7444 19.3057C31.82 18.8961 31.9352 18.4792 31.9964 18.0911C30.2504 17.7138 28.4972 17.3401 26.7621 16.9484C28.4972 16.571 30.272 16.2117 32 15.8056Z" fill="url(#paint1_radial_3:11299)"/>
                    <defs>
                    <radialGradient id="paint0_radial_3:11299" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.0047 16.9315) scale(15.9956 15.9673)">
                    <stop offset="0.3067" stopColor="#21C4EA"/>
                    <stop offset="0.524" stopColor="#1BABE0"/>
                    <stop offset="0.7169" stopColor="#1591D5"/>
                    </radialGradient>
                    <radialGradient id="paint1_radial_3:11299" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.0047 16.9648) scale(15.9956 15.9673)">
                    <stop offset="0.3067" stopColor="#21C4EA"/>
                    <stop offset="0.524" stopColor="#1BABE0"/>
                    <stop offset="0.7169" stopColor="#1591D5"/>
                    </radialGradient>
                    </defs>
                </svg>
            </div>

            <div className={styles.dropdown}>
                <Dropdown />
            </div>
            {/* className={styles.menu} */}
            {/* {${showModal ? styles.menuActive : styles.menu */}
            <div  onClick={showMenuModal} className={`${showModal ? `${styles.menuActive}` : `${styles.menu}`}`}>
                <Menu />
            </div>
            </div>
            
            <div className={styles.second}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.125 18H18.5625V10.0312C18.5625 6.72422 16.118 3.99141 12.9375 3.53672V2.625C12.9375 2.10703 12.518 1.6875 12 1.6875C11.482 1.6875 11.0625 2.10703 11.0625 2.625V3.53672C7.88203 3.99141 5.4375 6.72422 5.4375 10.0312V18H4.875C4.46016 18 4.125 18.3352 4.125 18.75V19.5C4.125 19.6031 4.20937 19.6875 4.3125 19.6875H9.375C9.375 21.1359 10.5516 22.3125 12 22.3125C13.4484 22.3125 14.625 21.1359 14.625 19.6875H19.6875C19.7906 19.6875 19.875 19.6031 19.875 19.5V18.75C19.875 18.3352 19.5398 18 19.125 18ZM12 20.8125C11.3789 20.8125 10.875 20.3086 10.875 19.6875H13.125C13.125 20.3086 12.6211 20.8125 12 20.8125ZM7.125 18V10.0312C7.125 8.72813 7.63125 7.50469 8.55234 6.58359C9.47344 5.6625 10.6969 5.15625 12 5.15625C13.3031 5.15625 14.5266 5.6625 15.4477 6.58359C16.3687 7.50469 16.875 8.72813 16.875 10.0312V18H7.125Z" fill="#262626"/>
                </svg>
                <Profile className={styles.profile}/>
            </div>            
        </div>
    )
}

export default Navbar
