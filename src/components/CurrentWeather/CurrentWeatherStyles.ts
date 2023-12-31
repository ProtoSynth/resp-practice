import styled from "styled-components";

interface CurrentWeatherProps {
    isMobile?: boolean;
}

export const StyledCurrentWeatherContainer = styled.div<CurrentWeatherProps>`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    place-items: center;
    padding: 20px;
    grid-gap: 10px;
    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
    color: #313131;

    ${(props) => props.isMobile && `
        padding: 15px;
        grid-gap: 5px;
        justify-items: start;
        background: linear-gradient(135deg, #fddb92 0%, #d1fdff 100%);
        color: #505050;
    `};
`;

export const StyledWeatherInfoBox = styled.div`
    display: grid;
    place-items: center;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background-image: linear-gradient(to right, #ff6a00, #ee0979);
    padding: 20px;
    width: 150px;
`;