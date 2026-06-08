import ExcelJS from 'exceljs';
import { test, expect } from '@playwright/test';

async function writeExcelTest(
    searchText: string,
    replaceText: string,
    change: {
        rowChange: number,
        colChange: number
    },
    filePath: string
) {

    const workbook =
        new ExcelJS.Workbook();

    await workbook.xlsx.readFile(
        filePath
    );

    const worksheet =
        workbook.getWorksheet('Sheet1');

    const output =
        readExcel(
            worksheet,
            searchText
        );

    const cell =
        worksheet!.getCell(
            output.row + change.rowChange,
            output.column + change.colChange
        );

    cell.value =
        replaceText;

    await workbook.xlsx.writeFile(
        filePath
    );
}

function readExcel(
    worksheet: ExcelJS.Worksheet | undefined,
    searchText: string
) {

    let output = {
        row: -1,
        column: -1
    };

    worksheet?.eachRow(
        (row, rowNumber) => {

        row.eachCell(
            (cell, colNumber) => {

            if (
                cell.value
                    ?.toString()
                    .trim()
                === searchText
            ) {

                output = {
                    row: rowNumber,
                    column: colNumber
                };
            }
        });
    });

    return output;
}

test(
'Upload download excel validation',
async ({ page }) => {

    const textSearch =
        'Mango';

    const updateValue =
        '350';

    const change = {
        rowChange: 0,
        colChange: 2
    };

    await page.goto(
        'https://rahulshettyacademy.com/upload-download-test/index.html'
    );

    const downloadPromise =
        page.waitForEvent(
            'download'
        );

    await page
        .getByRole(
            'button',
            {
                name: 'Download'
            }
        )
        .click();

    const download =
        await downloadPromise;

    const filePath =
        'downloads/download.xlsx';

    await download.saveAs(
        filePath
    );

    // Update Excel
    await writeExcelTest(
        textSearch,
        updateValue,
        change,
        filePath
    );

    // Read again to know updated column
    const workbook =
        new ExcelJS.Workbook();

    await workbook.xlsx.readFile(
        filePath
    );

    const worksheet =
        workbook.getWorksheet(
            'Sheet1'
        );

    const output =
        readExcel(
            worksheet,
            textSearch
        );

    const updatedColumn =
        output.column +
        change.colChange;

    // Upload modified file
    await page
        .locator('#fileinput')
        .setInputFiles(
            filePath
        );

    const desiredRow =
        page.getByRole('row')
            .filter({
                has:
                    page.getByText(
                        textSearch
                    )
            });

    // Validate updated price
    await expect(
        desiredRow.locator(
            `[data-column-id="${updatedColumn}"]`
        )
    ).toContainText(
        updateValue
    );
});