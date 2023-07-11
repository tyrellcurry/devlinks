import styled from "styled-components";

const SaveButton = () => {
    const Button = styled.button`
            display: flex;
            background-color: #beadff;
            border: 2px solid #beadff;
            color: #fff;
            border-radius: 8px;
            padding: 0.65rem 1rem;
            font-size: 1rem;
            font-weight: 600;
            cursor: not-allowed;
            margin-left: auto;
        &:hover {
            background-color: #beadff;
        }
        .save.active {
            background-color: #633cff;
            border-color: #633cff;
            cursor: pointer;
        }
    `;
    return (
        <Button className="save" disabled>
            Save
        </Button>
    );
};
export default SaveButton;
