import {render, screen, RenderResult} from "@testing-library/react"
import { afterEach, beforeEach, describe } from "node:test";
import Input from ".";

describe("Input", () => {
    let renderResult: RenderResult

    beforeEach(() => {
        renderResult = render(<Input id="userName" label="Username" />);
    })

    afterEach(() => {
        renderResult.unmount()
    })


    if("should empty in input on initial render", () => {
        const inputNode = screen.getByLabelText("Username") as HTMLInputElement;

        expect(inputNode).toHaveValue("");
    })
})