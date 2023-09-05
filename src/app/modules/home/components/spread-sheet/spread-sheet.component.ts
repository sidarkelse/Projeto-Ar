import { Component } from '@angular/core';

@Component({
  selector: 'app-spread-sheet',
  templateUrl: './spread-sheet.component.html',
  styleUrls: ['./spread-sheet.component.scss']
})
export class SpreadSheetComponent {

  columnsTrimestral = ['JAN', 'ABR', 'JUN', 'OUT'];
  columnsSemestral = ['ABR', 'OUT'];
   
  columns: any[] = ['Atividade', 'Frequencia', 'JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

  sections: any[] = [
 {
      type: "MENSAL",
      rows: [
        { id: '1', cells: [{ value: 'Limpar o Elemento filtrante ou substituir em casos de' }, { value: 'MENSAL' }, { value: true }, { value: true }, { value: 'Cell E1' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }] },
        { id: '2', cells: [{ value: 'Verificar danos e corrosão do suporte e existência de frestas' }, { value: 'MENSAL' }, { value: 'Cell C2' }, { value: 'Cell D2' }, { value: 'Cell E2' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }] },
        { id: '3', cells: [{ value: 'Verificar e corrigir o ajuste de moldura do filtro na estrutura' }, { value: 'MENSAL' }, { value: 'Cell C3' }, { value: 'Cell D3' }, { value: 'Cell E3' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }] },
        { id: '4', cells: [{ value: 'Verificar a operação de drenagem do condensador' }, { value: 'MENSAL' }, { value: 'Cell C3' }, { value: 'Cell D3' }, { value: 'Cell E3' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }] },
        { id: '5', cells: [{ value: 'Verificar vazamento e corrigir se necessário' }, { value: 'MENSAL' }, { value: 'Cell C3' }, { value: 'Cell D3' }, { value: 'Cell E3' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }] },
        { id: '6', cells: [{ value: 'Lavar Externamente' }, { value: 'MENSAL' }, { value: 'Cell C3' }, { value: 'Cell D3' }, { value: 'Cell E3' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }] },
        { id: '7', cells: [{ value: 'Verificar vedação dos painéis de fechamento,fixação e danos,Substituindo se necessário' }, { value: 'MENSAL' }, { value: 'Cell C3' }, { value: 'Cell D3' }, { value: 'Cell E3' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }] },
        { id: '8', cells: [{ value: 'Verificar e eliminar ruidos anormais e/ou vibrações' }, { value: 'MENSAL' }, { value: 'Cell C3' }, { value: 'Cell D3' }, { value: 'Cell E3' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }] },
        { id: '9', cells: [{ value: 'Verificar mecanismo de renovação de ar' }, { value: 'MENSAL' }, { value: 'Cell C3' }, { value: 'Cell D3' }, { value: 'Cell E3' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }] },
        { id: '10', cells: [{ value: 'Verificar botoeiras,knobs,etc e repor se necessário' }, { value: 'MENSAL' }, { value: 'Cell C3' }, { value: 'Cell D3' }, { value: 'Cell E3' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }] },
        { id: '11', cells: [{ value: 'Verificação e Atuação do Termostato e chave seletora' }, { value: 'MENSAL' }, { value: 'Cell C3' }, { value: 'Cell D3' }, { value: 'Cell E3' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }] },
        { id: '12', cells: [{ value: 'Verificar ruído e lubrificar se necessário' }, { value: 'MENSAL' }, { value: 'Cell C3' }, { value: 'Cell D3' }, { value: 'Cell E3' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }] },

      ],
    }
    ,
    {
      type: "TRIMESTRAL",
      rows: [
        
        { id: '1', cells: [{ value: 'Limpar o Elemento filtrante ou substituir em casos de' }, { value: 'TRIMESTRAL' }, { value: 'Cell C1' }, { value: 'Cell D1' }, { value: 'Cell E1' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }] },
        { id: '2', cells: [{ value: 'Verificar danos e corrosão' }, { value: 'TRIMESTRAL' }, { value: 'Cell C2' }, { value: 'Cell D2' }, { value: 'Cell E2' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }] },
        { id: '3', cells: [{ value: 'Lavar e Remover biofilme com produto biodegradável' }, { value: 'TRIMESTRAL' }, { value: 'Cell C3' }, { value: 'Cell D3' }, { value: 'Cell E3' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }] },
        { id: '4', cells: [{ value: 'Verificar danos e corrosão' }, { value: 'TRIMESTRAL' }, { value: 'Cell C3' }, { value: 'Cell D3' }, { value: 'Cell E3' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }] },
        { id: '5', cells: [{ value: 'Lavar internamente' }, { value: 'TRIMESTRAL' }, { value: 'Cell C3' }, { value: 'Cell D3' }, { value: 'Cell E3' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }] },
        { id: '6', cells: [{ value: 'Verificar e eliminar danos à corrosão' }, { value: 'TRIMESTRAL' }, { value: 'Cell C3' }, { value: 'Cell D3' }, { value: 'Cell E3' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }] },
        { id: '7', cells: [{ value: 'Verificar o estado de conservação do isolamento e substituir na existência de bolor' }, { value: 'TRIMESTRAL' }, { value: 'Cell C3' }, { value: 'Cell D3' }, { value: 'Cell E3' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }] },
        { id: '8', cells: [{ value: 'Lavar e remover incrustações' }, { value: 'TRIMESTRAL ' }, { value: 'Cell C3' }, { value: 'Cell D3' }, { value: 'Cell E3' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }] },
        { id: '9', cells: [{ value: 'Verificar a existência de danos e corrosão no aletado e moldura' }, { value: 'TRIMESTRAL' }, { value: 'Cell C3' }, { value: 'Cell D3' }, { value: 'Cell E3' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }] },
      
      ],
    },

    {
      type: "SEMESTRAL",
      rows: [
        { id: '1', cells: [{ value: 'Verificar e eliminar sujeira, danos e corrosão' }, { value: 'SEMESTRAL' }, { value: '' }, { value: 'Cell D1' }, { value: 'Cell E1' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }] },
        { id: '2', cells: [{ value: 'Verificar fixação e amortecimento de vibração' }, { value: 'SEMESTRAL' }, { value: 'Cell C2' }, { value: 'Cell D2' }, { value: 'Cell E2' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }] },

      ],
    }



  ];

  editableCells: any[] = [];
  isCellEditable(rowId: string, colId: string): boolean {
    return this.editableCells.some(cell => cell.rowId === rowId && cell.colId === colId);
  }

  toggleCellEditable(rowId: string, colId: string) {
    const index = this.editableCells.findIndex(cell => cell.rowId === rowId && cell.colId === colId);
    if (index !== -1) {
      this.editableCells.splice(index, 1);
    } else {
      this.editableCells.push({ rowId, colId });
    }
  }

  needDisableColumn(i: number, section: any) {
    let column = this.columns[i];
    if([0, 1].includes(i)) return false;

    if(section.type == 'MENSAL') {
      return false;
    }
    if(section.type == 'TRIMESTRAL' && this.columnsTrimestral.includes(column)) {
      return false;
    }
    if(section.type == 'SEMESTRAL' && this.columnsSemestral.includes(column)) {
      return false;
    }
    
    return true;
  }

  getColWidth(i: number) {
    return i == 0 ? 'width: 30%;' : '20%'
  }

  changeInput(cell: any, i: number, section: any) {
    if(this.needDisableColumn(i, section)) return;
    if(i > 1) {
      cell.value = !!cell.value
      cell.value = !cell.value
    }
    
    console.log(cell.value);
  }

  getSectionStyle(i: number, section: any) {
    if([0, 1].includes(i)) return 'false';
    if(section.type == 'MENSAL' && !this.needDisableColumn(i, section)) {
      return 'bg-mensal';
    }
    if(section.type == 'TRIMESTRAL' && !this.needDisableColumn(i, section)) {
      return 'bg-trimestral';
    }
    if(section.type == 'SEMESTRAL' && !this.needDisableColumn(i, section)) {
      return 'bg-semestral';
    }
    return ''
  }
}
