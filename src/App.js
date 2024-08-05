import { signal, useSignal } from '@preact/signals-react'

function App() {
	const count = useSignal(0)

	return (
		<button
			onClick={() => {
				count.value++
			}}
		>
			Value: {count.value}
			{/* not working */}
		</button>
	)
}

export default App
