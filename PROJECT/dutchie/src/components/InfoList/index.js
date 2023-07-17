import styles from './InfoList.module.css'

export default function InfoList({list, filter, titleClass, elementsClass}) {
    return (
        <div>
            <h3 className={titleClass}>{list.title}</h3>
            <p className={styles.filter}>
                <strong><i>{filter}</i></strong>
            </p>
            
                        
            <ul className={elementsClass}>
                {
                    list.elements && list.elements.map( (element) => (
                        <li key={element[element.length - 1]}>{element}</li>
                    ))
                }
            </ul>
        </div>
    )
}