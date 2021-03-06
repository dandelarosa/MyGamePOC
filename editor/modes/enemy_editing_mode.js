/**
 * The mode to use for editing enemies in a grid.
 * @class
 */
function EnemyEditingMode() {
  this.displayText = 'Editing Enemies';
  this.selectedValue = persistence.getValue('lastEnemySelected', 'int', ENEMY_NONE);
}

EnemyEditingMode.prototype = (function() {
  return {
    handleClickAtColRow: handleClickAtColRow,
    handleSelectedValue: handleSelectedValue,
    valueAtColRow: valueAtColRow,
  }

  /**
   * Gets the current value at the mouse's location.
   * @param {number} col - The index of the column clicked on.
   * @param {number} row - The index of the row clicked on.
   * @param {Object} editor - The object managing the level editing.
   */
  function valueAtColRow(col, row, editor) {
    var grid = editor.allGrids.enemyGrid;
    return grid.valueAtColAndRow(col, row);
  }

  /**
   * Handles clicks on the grid.
   * @param {number} col - The index of the column clicked on.
   * @param {number} row - The index of the row clicked on.
   * @param {Object} editor - The object managing the level editing.
   */
  function handleClickAtColRow(col, row, editor) {
    editor.allGrids.enemyGrid.setValueAtColAndRow(this.selectedValue, col, row);
    updateEnemiesDetailUI();
  }

  /**
   * Handles the selection of a enemy value.
   * @param {number} newValue - The selected enemy value.
   */
  function handleSelectedValue(newValue) {
    this.selectedValue = newValue;
    persistence.setValue('lastEnemySelected', newValue);
  }
})();
