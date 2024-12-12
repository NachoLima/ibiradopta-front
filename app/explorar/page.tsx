"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Modal } from "../components/exploreModal";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    location: string;
    price: number;
    isFinished: number;
    images: { imageUrl: string; imageOrder: number }[];
}

const FinishedProjects: React.FC = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const [projects, setProjects] = useState<Project[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showArrows, setShowArrows] = useState(false);
    const videoRefs = useRef<HTMLVideoElement[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [galleryIndex, setGalleryIndex] = useState(0);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_GATEWAY_URL}/projects/getall`
                );
                const data = await response.json();
                const inactiveProjects = data.filter(
                    (project: Project) => project.isFinished === 1
                );
                setProjects(inactiveProjects);

                if (inactiveProjects.length >= 3) {
                    setShowArrows(true);
                }
            } catch (error) {
                console.error("Error al obtener proyectos:", error);
            }
        };

        fetchProjects();
    }, []);

    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (video) {
                if (index === currentIndex) {
                    video.play();
                } else {
                    video.pause();
                    video.currentTime = 0;
                }
            }
        });
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
        setGalleryIndex(0);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
        setGalleryIndex(0);
    };

    const handleApoyarClick = () => {
        const selectedProjectId = projects[currentIndex]?.id;

        if (!session) {
            signIn("keycloak", {
                callbackUrl: `/pago?proyecto=${encodeURIComponent(selectedProjectId)}`,
            });
        } else {
            router.push(`/pago?proyecto=${encodeURIComponent(selectedProjectId)}`);
        }
    };

    const handleVerMasClick = () => {
        setIsModalOpen(true);
        setGalleryIndex(0);
    };

    const handleGalleryNext = () => {
        setGalleryIndex((prevIndex) => (prevIndex + 1) % projects[currentIndex].images.length);
    };

    const handleGalleryPrev = () => {
        setGalleryIndex((prevIndex) =>
            prevIndex === 0 ? projects[currentIndex].images.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            {/* Header */}
            <header className="bg-moss-green text-white py-6 mb-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-Righteous mb-4">Proyectos Finalizados</h1>
                    <p className="text-sm font-Poppins">
                        Acá podes ver todos los proyectos terminados gracias a gente como vos!
                    </p>
                </div>
            </header>


            {/* Main Section */}
            <section className="flex flex-col items-center w-full max-w-[1200px] mx-auto">
                {/* Carousel */}
                <div className="relative w-full h-[600px] bg-gray-100 shadow-[0_30px_50px_rgba(219,219,219,1)] mb-16">
                    <div className="relative h-full">
                        {projects.map((project, index) => {
                            const zIndex =
                                index === currentIndex
                                    ? 50
                                    : (index + projects.length - currentIndex) % projects.length === 1
                                        ? 40
                                        : 30;

                            return (
                                <div
                                    key={project.id}
                                    className={`absolute w-[200px] h-[300px] top-1/2 transform -translate-y-1/2 rounded-2xl shadow-[0_30px_50px_rgba(80,80,80,1)] transition-all duration-500 ${currentIndex === index
                                        ? "left-0 w-full h-full rounded-none"
                                        : currentIndex === (index + 1) % projects.length
                                            ? "left-2/3"
                                            : currentIndex === (index + 2) % projects.length
                                                ? "left-[calc(50%+440px)]"
                                                : "left-[calc(50%+440px)] opacity-0"
                                        }`}
                                    style={{ zIndex }}
                                >
                                    <video
                                        className="w-full h-full object-cover rounded-lg"
                                        src={project.imageUrl}
                                        ref={(el) => (videoRefs.current[index] = el!)}
                                        loop
                                        muted={index !== currentIndex}
                                    ></video>

                                    {currentIndex === index && (
                                        <div className="absolute top-1/2 left-[100px] w-[300px] text-left text-gray-200 transform -translate-y-1/2 font-sans">
                                            <div className="text-4xl uppercase font-bold">{project.name}</div>
                                            <div className="mt-2 mb-5">{project.description}</div>
                                            <div className="mt-2 text-sm">Ubicación: {project.location}</div>
                                            <button
                                                className="mt-4 px-5 py-2 bg-gray-700 text-white rounded-md cursor-pointer"
                                                onClick={handleVerMasClick}
                                            >
                                                Ver más
                                            </button>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Navigation Buttons */}
                    {showArrows && (
                        <div
                            className="absolute bottom-5 w-full flex justify-between px-10"
                            style={{ zIndex: 60 }}
                        >
                            <button
                                className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600"
                                onClick={handlePrev}
                                aria-label="Previous project"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600"
                                onClick={handleNext}
                                aria-label="Next project"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    )}
                </div>

                {/* Modal for expanded details */}
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <div className="p-6">
                        <h1 className="text-4xl font-bold text-moss-green mb-4">
                            {projects[currentIndex]?.name}
                        </h1>
                        <p className="text-gray-700 mb-4">{projects[currentIndex]?.description}</p>
                        <p className="text-gray-700 mb-4">
                            <strong>Ubicación:</strong> {projects[currentIndex]?.location}
                        </p>
                        <div className="mt-8">
                            <h2 className="text-3xl font-bold text-moss-green mb-6">Galería de imágenes</h2>
                            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-md">
                                <Image
                                    src={projects[currentIndex]?.images[galleryIndex]?.imageUrl || ""}
                                    alt={`Gallery Image ${galleryIndex + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="flex justify-center mt-4 gap-4">
                                <button
                                    onClick={handleGalleryPrev}
                                    className="bg-moss-green text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
                                >
                                    Anterior
                                </button>
                                <button
                                    onClick={handleGalleryNext}
                                    className="bg-moss-green text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
                                >
                                    Siguiente
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>

                {/* Why Plant Section */}
                <div className="w-full bg-white rounded-lg shadow-lg p-10 mb-10">
                    <h1 className="text-3xl font-bold text-moss-green mb-6 text-center">
                        ¿Por qué plantar árboles autóctonos del Uruguay?
                    </h1>
                    <p className="text-gray-700 mb-4 text-justify mx-auto max-w-3xl">
                        Los árboles autóctonos del Uruguay, como el ceibo y el ibirapitá,
                        son fundamentales para mantener el equilibrio de los ecosistemas
                        locales. Su presencia contribuye a la conservación de la biodiversidad,
                        ofreciendo refugio y alimento para la fauna autóctona. Además,
                        ayudan a combatir la erosión del suelo, mejorar la calidad del aire y
                        capturar dióxido de carbono, contribuyendo significativamente a
                        mitigar el cambio climático.
                    </p>
                    <p className="text-gray-700 mb-4 text-justify mx-auto max-w-3xl">
                        A nivel social, los proyectos de reforestación con especies de flora
                        autóctonas fomentan la participación comunitaria y fortalecen la
                        conexión entre las personas y su entorno natural. Estos árboles,
                        adaptados al clima y al suelo de la región, requieren menos recursos
                        para prosperar, haciendo que su plantación sea más sostenible y
                        beneficiosa a largo plazo.
                    </p>
                    <div className="flex justify-center mt-16">
                        <Image
                            src="/puma.jpg"
                            alt="Tree 1"
                            width={600}
                            height={500}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="flex justify-center mt-10">
                        <Link
                            href="/proyectos"
                            className="px-6 py-3 bg-moss-green text-white rounded-full hover:bg-green-700 transition"
                        >
                            Conoce nuestros proyectos actuales
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FinishedProjects;
