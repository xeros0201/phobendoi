import { createRoot } from 'react-dom/client'
import './css/index.css'
import { Routes } from './routes'
import './i18n/i18n'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { Draggable } from "gsap/Draggable";
import { Observer } from "gsap/Observer";
import gsap from 'gsap'
 
gsap.registerPlugin(ScrollTrigger,ScrollToPlugin,Draggable,Observer)
const container = document.getElementById('app')!
createRoot(container).render(<Routes />)
