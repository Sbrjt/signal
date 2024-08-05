import { useSignal } from '@preact/signals-react'

function App() {
	const ob = useSignal({ x: 0 })

	return (
		<button
			onClick={() => {
				ob.value = { x: ob.value.x + 1 }
				console.log(ob.value)
			}}
		>
			Value: {ob.value.x}
		</button>
	)
}

export default App
