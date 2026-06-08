# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: uploadAndDownloadExcel.spec.ts >> Upload download excel validation
- Location: tests\uploadAndDownloadExcel.spec.ts:78:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: download.saveAs: canceled
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - 'heading "RAHUL SHETTY ACADEMY PRACTISE Note: Data will be reset after page refresh." [level=1] [ref=e6]':
      - text: RAHUL SHETTY ACADEMY PRACTISE
      - generic [ref=e7]: "Note: Data will be reset after page refresh."
  - generic [ref=e8]:
    - table [ref=e11]:
      - rowgroup [ref=e12]:
        - row "S No ▲ Fruit Name ▲ Color ▲ Price ▲ Season ▲" [ref=e13]:
          - columnheader "S No ▲" [ref=e15] [cursor=pointer]:
            - generic [ref=e16]: S No
            - generic [ref=e17]: ▲
          - columnheader "Fruit Name ▲" [ref=e19] [cursor=pointer]:
            - generic [ref=e20]: Fruit Name
            - generic [ref=e21]: ▲
          - columnheader "Color ▲" [ref=e23] [cursor=pointer]:
            - generic [ref=e24]: Color
            - generic [ref=e25]: ▲
          - columnheader "Price ▲" [ref=e27] [cursor=pointer]:
            - generic [ref=e28]: Price
            - generic [ref=e29]: ▲
          - columnheader "Season ▲" [ref=e31] [cursor=pointer]:
            - generic [ref=e32]: Season
            - generic [ref=e33]: ▲
      - rowgroup [ref=e34]:
        - row "1 Mango Yellow 299 Summer" [ref=e35]:
          - cell "1" [ref=e36]:
            - generic [ref=e37]: "1"
          - cell "Mango" [ref=e38]:
            - generic [ref=e39]: Mango
          - cell "Yellow" [ref=e40]:
            - generic [ref=e41]: Yellow
          - cell "299" [ref=e42]:
            - generic [ref=e43]: "299"
          - cell "Summer" [ref=e44]:
            - generic [ref=e45]: Summer
        - row "2 Apple Red 345 Winter" [ref=e46]:
          - cell "2" [ref=e47]:
            - generic [ref=e48]: "2"
          - cell "Apple" [ref=e49]:
            - generic [ref=e50]: Apple
          - cell "Red" [ref=e51]:
            - generic [ref=e52]: Red
          - cell "345" [ref=e53]:
            - generic [ref=e54]: "345"
          - cell "Winter" [ref=e55]:
            - generic [ref=e56]: Winter
        - row "3 Papaya Orange 187 Spring" [ref=e57]:
          - cell "3" [ref=e58]:
            - generic [ref=e59]: "3"
          - cell "Papaya" [ref=e60]:
            - generic [ref=e61]: Papaya
          - cell "Orange" [ref=e62]:
            - generic [ref=e63]: Orange
          - cell "187" [ref=e64]:
            - generic [ref=e65]: "187"
          - cell "Spring" [ref=e66]:
            - generic [ref=e67]: Spring
        - row "4 Banana Yellow 69 All" [ref=e68]:
          - cell "4" [ref=e69]:
            - generic [ref=e70]: "4"
          - cell "Banana" [ref=e71]:
            - generic [ref=e72]: Banana
          - cell "Yellow" [ref=e73]:
            - generic [ref=e74]: Yellow
          - cell "69" [ref=e75]:
            - generic [ref=e76]: "69"
          - cell "All" [ref=e77]:
            - generic [ref=e78]: All
        - row "5 Kivi Green 399 Winter" [ref=e79]:
          - cell "5" [ref=e80]:
            - generic [ref=e81]: "5"
          - cell "Kivi" [ref=e82]:
            - generic [ref=e83]: Kivi
          - cell "Green" [ref=e84]:
            - generic [ref=e85]: Green
          - cell "399" [ref=e86]:
            - generic [ref=e87]: "399"
          - cell "Winter" [ref=e88]:
            - generic [ref=e89]: Winter
        - row "6 Orange Orange 199 Summer" [ref=e90]:
          - cell "6" [ref=e91]:
            - generic [ref=e92]: "6"
          - cell "Orange" [ref=e93]:
            - generic [ref=e94]: Orange
          - cell "Orange" [ref=e95]:
            - generic [ref=e96]: Orange
          - cell "199" [ref=e97]:
            - generic [ref=e98]: "199"
          - cell "Summer" [ref=e99]:
            - generic [ref=e100]: Summer
    - navigation [ref=e102]:
      - generic [ref=e103]: "Rows per page:"
      - generic [ref=e104]:
        - combobox "Rows per page:" [ref=e105] [cursor=pointer]:
          - option "10" [selected]
          - option "15"
          - option "20"
          - option "25"
          - option "30"
        - img
      - generic [ref=e106]: 1-6 of 6
      - generic [ref=e107]:
        - button "First Page" [disabled] [ref=e108]:
          - img [ref=e109]
        - button "Previous Page" [disabled] [ref=e112]:
          - img [ref=e113]
        - button "Next Page" [disabled] [ref=e116]:
          - img [ref=e117]
        - button "Last Page" [disabled] [ref=e120]:
          - img [ref=e121]
  - generic [ref=e125]:
    - button "Download" [active] [ref=e126] [cursor=pointer]
    - button "Choose File" [ref=e127]
```

# Test source

```ts
  17  |     await workbook.xlsx.readFile(
  18  |         filePath
  19  |     );
  20  | 
  21  |     const worksheet =
  22  |         workbook.getWorksheet('Sheet1');
  23  | 
  24  |     const output =
  25  |         readExcel(
  26  |             worksheet,
  27  |             searchText
  28  |         );
  29  | 
  30  |     const cell =
  31  |         worksheet!.getCell(
  32  |             output.row + change.rowChange,
  33  |             output.column + change.colChange
  34  |         );
  35  | 
  36  |     cell.value =
  37  |         replaceText;
  38  | 
  39  |     await workbook.xlsx.writeFile(
  40  |         filePath
  41  |     );
  42  | }
  43  | 
  44  | function readExcel(
  45  |     worksheet: ExcelJS.Worksheet | undefined,
  46  |     searchText: string
  47  | ) {
  48  | 
  49  |     let output = {
  50  |         row: -1,
  51  |         column: -1
  52  |     };
  53  | 
  54  |     worksheet?.eachRow(
  55  |         (row, rowNumber) => {
  56  | 
  57  |         row.eachCell(
  58  |             (cell, colNumber) => {
  59  | 
  60  |             if (
  61  |                 cell.value
  62  |                     ?.toString()
  63  |                     .trim()
  64  |                 === searchText
  65  |             ) {
  66  | 
  67  |                 output = {
  68  |                     row: rowNumber,
  69  |                     column: colNumber
  70  |                 };
  71  |             }
  72  |         });
  73  |     });
  74  | 
  75  |     return output;
  76  | }
  77  | 
  78  | test(
  79  | 'Upload download excel validation',
  80  | async ({ page }) => {
  81  | 
  82  |     const textSearch =
  83  |         'Mango';
  84  | 
  85  |     const updateValue =
  86  |         '350';
  87  | 
  88  |     const change = {
  89  |         rowChange: 0,
  90  |         colChange: 2
  91  |     };
  92  | 
  93  |     await page.goto(
  94  |         'https://rahulshettyacademy.com/upload-download-test/index.html'
  95  |     );
  96  | 
  97  |     const downloadPromise =
  98  |         page.waitForEvent(
  99  |             'download'
  100 |         );
  101 | 
  102 |     await page
  103 |         .getByRole(
  104 |             'button',
  105 |             {
  106 |                 name: 'Download'
  107 |             }
  108 |         )
  109 |         .click();
  110 | 
  111 |     const download =
  112 |         await downloadPromise;
  113 | 
  114 |     const filePath =
  115 |         'downloads/download.xlsx';
  116 | 
> 117 |     await download.saveAs(
      |                    ^ Error: download.saveAs: canceled
  118 |         filePath
  119 |     );
  120 | 
  121 |     // Update Excel
  122 |     await writeExcelTest(
  123 |         textSearch,
  124 |         updateValue,
  125 |         change,
  126 |         filePath
  127 |     );
  128 | 
  129 |     // Read again to know updated column
  130 |     const workbook =
  131 |         new ExcelJS.Workbook();
  132 | 
  133 |     await workbook.xlsx.readFile(
  134 |         filePath
  135 |     );
  136 | 
  137 |     const worksheet =
  138 |         workbook.getWorksheet(
  139 |             'Sheet1'
  140 |         );
  141 | 
  142 |     const output =
  143 |         readExcel(
  144 |             worksheet,
  145 |             textSearch
  146 |         );
  147 | 
  148 |     const updatedColumn =
  149 |         output.column +
  150 |         change.colChange;
  151 | 
  152 |     // Upload modified file
  153 |     await page
  154 |         .locator('#fileinput')
  155 |         .setInputFiles(
  156 |             filePath
  157 |         );
  158 | 
  159 |     const desiredRow =
  160 |         page.getByRole('row')
  161 |             .filter({
  162 |                 has:
  163 |                     page.getByText(
  164 |                         textSearch
  165 |                     )
  166 |             });
  167 | 
  168 |     // Validate updated price
  169 |     await expect(
  170 |         desiredRow.locator(
  171 |             `[data-column-id="${updatedColumn}"]`
  172 |         )
  173 |     ).toContainText(
  174 |         updateValue
  175 |     );
  176 | });
```