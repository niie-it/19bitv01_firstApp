// ES 6 - Arrow function

import { Text } from "react-native";

export const Body = ({ content }) => {

    return (
        <Text>
            BODY container. {content}
        </Text>
    );
};

// function Body(content) {
//     return (
//         <Text>
//             BODY container. {content}
//         </Text>
//     );
// }