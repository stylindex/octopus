import { Box, Checkbox, TableCell, TableHeader, TableHeaderCell, TableRow, TableSearchCell } from '@stylindex/octopus'
import React, { useState } from 'react'

const TableExample = () => {
    const [title, setTitle] = useState('')
    const rows = [{
        id: 1,
        name: 'Sam',
        title: 'CTO',
        description: 'Some longer text'
    }, {
        id: 2,
        name: 'Holly',
        title: 'CTO',
        description: 'Some more text'
    }, {
        id: 3,
        name: 'Brenden',
        title: 'COO',
        description: 'Some other text'
    }]

    return <Box noPadding>
        <TableHeader>
            <TableHeaderCell width="60px">
                <Checkbox/>
            </TableHeaderCell>
            <TableHeaderCell width="80px">
                ID
            </TableHeaderCell>
            <TableHeaderCell flex={1}>
                Name
            </TableHeaderCell>
            <TableSearchCell
                flex={1}
                placeholder='Title'
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <TableHeaderCell flex={2}>
                Description
            </TableHeaderCell>
        </TableHeader>
        {rows.map(row =>
            <TableRow key={row.id} onClick={() => alert('Row clicked!')}>
                <TableCell width="60px">
                    <Checkbox/>
                </TableCell>
                <TableCell width="80px">
                    {row.id}
                </TableCell>
                <TableCell flex={1}>
                    {row.name}
                </TableCell>
                <TableCell flex={1}>
                    {row.title}
                </TableCell>
                <TableCell flex={2}>
                    {row.description}
                </TableCell>
            </TableRow>
        )}
    </Box>
}

export default TableExample
