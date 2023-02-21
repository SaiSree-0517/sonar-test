import {render,screen} from "@testing-library/react"
import { MuiTypography } from "."

describe("Typography component tests correctly",()=>{
    test("Typograpghy tests correctly with textId",()=>{
        render(<MuiTypography variant="heading6" children="Hello"/>)
        expect(screen.getByText(/hello/i)).toBeInTheDocument();
    })
})