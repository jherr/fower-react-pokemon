import React from "react";
import { Box, Image } from "@fower/react";
import { styled } from "@fower/styled";
import { addAtom } from "@fower/core";

import { Pokemon } from "./usePokemon";

const Button = styled("button");

addAtom("grid-30-70", {
  gridTemplateColumns: "30% 70%",
});
addAtom("grid-70-30", {
  gridTemplateColumns: "70% 30%",
});

const PillButton: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    selected: boolean;
  }
> = ({ onClick, children, selected }) => (
  <Button
    onClick={onClick}
    p-10
    textLG
    w="80%"
    white={selected}
    bgBlue600={selected}
    border-1={!selected}
    borderBlue600={!selected}
    roundedFull
  >
    {children}
  </Button>
);

const PokemonCard: React.FunctionComponent<
  Pokemon & {
    selected: boolean;
    onSelected: (name: string) => void;
  }
> = ({ name, type, base, selected, onSelected }) => (
  <Box p-10 border-1 borderGray500 roundedXL grid gap-10 grid-30-70>
    <Image src={`/pokemon/${name.english.toLowerCase()}.jpg`} w="100%" />
    <Box>
      <Box grid gridTemplateColumns-2 gap-10>
        <Box>
          <Box textXL fontBold>
            {name.english}
          </Box>
          <Box textXL fontBold>
            {name.japanese}
          </Box>
        </Box>
        <Box>
          <PillButton
            onClick={() => onSelected(name.english)}
            selected={selected}
          >
            Select
          </PillButton>
        </Box>
      </Box>
      <Box textLG mt-10>
        {type.join(", ")}
      </Box>
      <Box grid gridTemplateColumns-2 gap-10 ml-20 mt-10>
        {Object.keys(base).map((k) => (
          <React.Fragment key={k}>
            <Box textSM fontBold>
              {k}
            </Box>
            <Box textSM>{base[k]}</Box>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  </Box>
);

export default PokemonCard;
