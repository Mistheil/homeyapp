import { Fragment } from "react";
import AboutCard from "./components/AboutCard";
import "./AboutPage.css";

export default function AboutPage() {
    const dataDev = [
        {
            id: 1,
            img: "https://media.discordapp.net/attachments/781782917764349972/911662562775556136/Feeling_gray.png?width=678&height=678",
            nama: "Alle Raditya Otodinata",
            nim: "21120119130057",
            github: "mistheil",

        },

        {
            id: 2,
            img: "https://avatars.githubusercontent.com/u/63124637?v=4",
            nama: "Gunawan Prasetya",
            nim: "21120119120025",
            github: "gunawan2909",
        },

        {
            id: 3,
            img: "https://avatars.githubusercontent.com/u/38352149?v=4",
            nama: "Geraldi Byantara Wisesa",
            nim: "21120117110001",
            github: "geraldibw",
        },

        {
            id: 4,
            img: "https://avatars.githubusercontent.com/u/94170181?v=4",
            nama: "Donito Akbar Labaya",
            nim: "21120119120033",
            github: "DonitoAkbar",
        },
    ];

    return (
        <>
            <h1 id="headerProf">Behind the App:</h1>
            <div className="Prof">
                {dataDev.map((item, index) => (
                    <Fragment key={item.id}>
                        <AboutCard
                            img={item.img}
                            nama={item.nama}
                            nim={item.nim}
                            github={item.github}
                        />
                        {dataDev.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                    </Fragment>
                ))}
            </div>

            <div className="containerProfDetail">
                <a href={`https://github.com/Mistheil/homeyapp`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <h2>Link Github dari Project ini</h2>

                </a>
            </div>

            <div className="containerProfDetail">
                <p id="profDetail">Aplikasi ini dibuat untuk Tugas Akhir</p>
                <p id="profDetail">Praktikum Mobile Device Programming 2021</p>
                <p id="profDetail">Jurusan Teknik Komputer</p>
                <p id="profDetail">Fakultas Teknik</p>
                <p id="profDetail">Universitas Diponegoro</p>
            </div>

        </>
    );
}
