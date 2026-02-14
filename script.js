const h2 = document.querySelector(".texto1 h2")
const textPt_Br = document.querySelector('.about-box')

function mudarIdiomaTextoSobre(){
    h2.innerHTML = "About me"
    textPt_Br.innerHTML = `
        <p>
            My name is Luiz Cláudio. I am an IT technician and a
            junior web developer with a focus on front-end development
            and interactive systems.
            <br><br>
            I have experience with HTML, CSS, JavaScript, Python, C++,
            and C#, with a strong emphasis on game development using
            Unity. I aim to create well-structured projects with clean
            code, clear logic, and a strong focus on user experience.
            <br><br>
            I am self-taught, curious, and constantly seeking technical
            improvement. I also study four languages: English, Mandarin,
            Spanish, and Korean. In addition, I have a leadership-oriented
            profile, with experience in positions of responsibility at
            school, such as student council president and class representative.
            <br><br>
            My goal is to grow as a developer, build a solid portfolio,
            and gain experience in the technology market.
        </p>
    `
}
