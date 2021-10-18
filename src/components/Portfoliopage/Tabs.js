import React, {useState} from 'react'

const Tabs = () => {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };


    return (
        <>
            <div className="bloc-tabs">
                <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Tab 1</button>
                <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Tab 2</button>
            </div>
            <div className="content-tabs">
                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                    <h2>Content 1</h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                        praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                        vel voluptatum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt nihil officia esse. Obcaecati autem ducimus non repudiandae nihil commodi alias adipisci veniam voluptatem cupiditate, eos sapiente consequatur omnis dolor, illo ipsa ut, a eius culpa. Corrupti quas laboriosam recusandae aut omnis illo. Et earum eaque quas! Eum debitis hic harum, magnam earum facilis, enim ad dolores sapiente saepe sunt a non neque ratione obcaecati laborum nam dolorum omnis totam. Eaque tenetur necessitatibus consequatur accusantium, voluptas mollitia dolor iure obcaecati incidunt suscipit quod ut maxime vitae laudantium assumenda similique eius delectus! Rem ex qui atque sequi suscipit obcaecati eligendi dicta quam!
                    </p>
                </div>
                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    <h2>Content 2</h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                        voluptatum qui adipisci.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Tabs
