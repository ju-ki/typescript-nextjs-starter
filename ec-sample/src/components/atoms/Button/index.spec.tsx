import {render, screen, fireEvent, RenderResult} from "@testing-library/react"
import Button from "."

describe('Button', () => {
    let renderResult : RenderResult
    let handleClick : jest.Mock

    handleClick = jest.fn()
    renderResult = render(
        <Button variants="primary" onClick={handleClick}>
            button
        </Button>,
    )

    afterEach(() => {
        renderResult.unmount();
    })

    it("ボタンを押した時にonclickが呼ばれる", () => {
        fireEvent.click(screen.getByText('Button'))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})
