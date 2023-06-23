import styles from "../style"
import GetStarted from "./GetStarted"


const CTA = () => 
  (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding}  sm:flex-row flex-col outline-gradient2  box-shadow `}>
      <div className="flex-1 flex flex-col  ">
        <h2 className={styles.heading2} >Join the Digital Art Revolution now!</h2>
        <p className={`${styles.paragraph} `}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, temporibus eius maxime voluptates aspernatur saepe dignissimos delectus?
        </p>
      </div>
      <div>
        <GetStarted />
      </div>
    </section>
  )


export default CTA