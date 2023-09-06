import excel from 'exceljs'
describe("Excel Activity",async()=>{
    xit("read data from excel",async()=>{
        const book=new excel.Workbook()
        await book.xlsx.readFile("C:/Users/Sumukh g s/Desktop/WebDriverIO Project/demo.xlsx")
        const sheet=book.getWorksheet("Sheet2")
        let data=sheet.getRow(1).getCell(1).toString()
        let data2=sheet.getRow(1).getCell(2).toString()
        console.log(data+"-------->" +data2);
    })

   xit("write data into the excelSheet",async()=>{
        const book=new excel.Workbook()
        await book.xlsx.readFile("C:/Users/Sumukh g s/Desktop/WebDriverIO Project/demo.xlsx")
        //to write into new worksheet
        const sheetname=book.addWorksheet("Sheet1")
        sheetname.addRow(3).getCell(2).value="ganesha"
        await book.xlsx.writeFile("C:/Users/Sumukh g s/Desktop/WebDriverIO Project/demo.xlsx")
    })

    it("reading multiple data from Excel",async()=>{
        const book=new excel.Workbook()
        await book.xlsx.readFile("C:/Users/Sumukh g s/Desktop/WebDriverIO Project/demo.xlsx")
        const sheet=book.getWorksheet("Sheet2")
        for(let x=1;x<4;x++)
        {
            let d1=sheet.getRow(x).getCell(1).toString()
            let d2=sheet.getRow(x).getCell(2).toString()
            console.log(d1+"---------->"+d2)
        }
        let s=sheet.rowCount //to find the Number of rows present in the sheet
        let c= sheet.getRow(1).cellCount //to find the number of cells present in the sheet - it is a property not a method
        console.log(s+"   =   "+c);
    })


    it.only("to fetch multiple data using 2 for loop",async()=>{
        const book1=new excel.Workbook()
        await book1.xlsx.readFile("C:/Users/Sumukh g s/Desktop/WebDriverIO Project/demo.xlsx")
        const sheet1=book1.getWorksheet("Sheet2")
        let s=sheet1.rowCount 
        for(let i=1;i<=s;i++)
        {
            let c=sheet1.getRow(i).cellCount
            for(let j=1;j<=c;j++)
            {
                console.log(sheet1.getRow(i).getCell(j).toString());
            }

        }
    })
})