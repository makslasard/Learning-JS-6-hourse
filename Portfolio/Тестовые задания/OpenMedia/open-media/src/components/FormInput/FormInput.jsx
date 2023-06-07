import arrow from '../../assets/img/arrow.svg'

import styles from './FormInput.module.scss'

const FormInput = () => {
	return (
		<>
			<div className={styles.container}>
				<input type="text" placeholder="https://" />
				<button>
					<img src={arrow} alt="arrow" />
				</button>
			</div>
		</>
	)
}

export default FormInput
