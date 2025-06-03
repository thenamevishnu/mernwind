import { useState } from "react"
import { Button, Stack } from "react-bootstrap"

export const HomePage = () => {
    const [counter, setCounter] = useState(0)
    return <Stack gap={2} className="d-flex justify-content-center vh-100 align-items-center">
        <div>{counter}</div>
        <Button
            onClick={() => setCounter(counter + 1)}
            variant="success"
        >Increment</Button>
    </Stack>
}