import {useRouter} from "next/navigation";
import {EMAIL} from "@/data/links";

const useClickHandlers = () => {
    const router = useRouter()

    const scrollToProjectsSection = () => {
        const section = document.getElementById('section-projects');
        if (section) {
            section.scrollIntoView({behavior: 'smooth', block: "start"});
        }
    }

    const showResume = () => {
        window.open("/assets/Opey_Adeyemi-Resume.pdf","_blank");
    }

    const showEmail = () => {
        router.push(`mailto:${EMAIL}`);
    }

    return {
        scrollToProjectsSection,
        showResume,
        showEmail,
    }
}

export {
    useClickHandlers
}