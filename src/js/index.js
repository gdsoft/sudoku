const toolkit = require('./toolkit');

class Grid {
    constructor(container) {
        this._$container = container;
    }

    build() {
        const matrix = toolkit.makeMatrix();

        const rowGroupClasses = [ "row_g_top", "row_g_middle", "row_g_bottom" ];

        const $cells = matrix.map(rowVals => rowVals.map(
            cellVal => $("<span>").text(cellVal)
        ));

        const $divArray = $cells.map($spanArray =>
            $("<div>").addClass("row").append($spanArray)
        );

        this._$container.append($divArray);
    }
}

new Grid($("#container")).build();
