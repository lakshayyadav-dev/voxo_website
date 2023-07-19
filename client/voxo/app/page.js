import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
    return (
        <div className={styles.container}>
            <Navbar />
            <Hero />
            <About />
        </div>
    );
}
