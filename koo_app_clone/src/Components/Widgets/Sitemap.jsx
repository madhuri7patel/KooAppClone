import "./Sitemap.css"

function Sitemap() {
    const names = ["Akash Naykude", "George Abraham", "Arnavi Gode", "Vani A", "Mayank Prajapati",
        "Sushant Salvi", "Nikita Parekh", "Yogesh Sambare", "Siddhesh Patil", "Krushna Katore", "Akash Borate", "Aniket Darekar",
        "Abhishek Katkar", "Pratham Sharma", "AnkitMishra", "Nilesh Agraval", "Narendra Kumar Panchal"];
    const listItems = names.map((names) =>
        <h3>{names}</h3>
    );




    return <div>
        <div className="sitemap-heading">Sitemap - Profiles</div>
        <div id="rootabcd">
            <h3>{listItems}</h3>
            <h3>{listItems}</h3>
            <h3>{listItems}</h3>
            <h3>{listItems}</h3>
        </div>
    </div>
}

export default Sitemap