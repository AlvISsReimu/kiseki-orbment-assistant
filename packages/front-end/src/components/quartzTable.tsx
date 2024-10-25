import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { ALL_QUARTZ } from "@shared/constants/quartz";
import { Element } from "@shared/enums/element";
import { Language } from "@shared/enums/language";
import type { Quartz } from "@shared/model/quartz";

const headers = Object.values(Element);
const data: Quartz[][] = (() => {
  const currentRow = new Array(headers.length).fill(0);
  const data = [];
  ALL_QUARTZ.forEach((quartz) => {
    const row = currentRow[headers.indexOf(quartz.element)];
    if (!data[row]) {
      data[row] = [];
    }
    data[row].push(quartz);
    currentRow[headers.indexOf(quartz.element)] += 1;
  });
  return data;
})();


export const QuartzTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index} style={{textAlign:'center'}}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {row.map((quartz, ind) => (
                <TableCell key={ind}>{quartz.name_i18n[Language.ZH_CN]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};