
// Bits on the far end of the 32-bit global tile ID are used for tile flags
const FLIPPED_HORIZONTALLY_FLAG = 0x80000000;
const FLIPPED_VERTICALLY_FLAG   = 0x40000000;
const FLIPPED_DIAGONALLY_FLAG   = 0x20000000;

function ParseGIDFlags(flipped_horizontally, flipped_vertically, flipped_diagonally) {

    let flip = false;
    let rot = 0;

    return {flipped: flip, rotation : rot};

}

// http://docs.mapeditor.org/en/latest/reference/tmx-map-format/
export default function ParseGID(global_tile_id) {

    // The global_tile_id is alredy parsed on Base64.decodeToUint32() phase.

    /* unsigned global_tile_id = data[tile_index] |
                              data[tile_index + 1] << 8 |
                              data[tile_index + 2] << 16 |
                              data[tile_index + 3] << 24;*/

    // Read out the flags
    let flipped_horizontally = Boolean(global_tile_id & FLIPPED_HORIZONTALLY_FLAG);
    let flipped_vertically = Boolean(global_tile_id & FLIPPED_VERTICALLY_FLAG);
    let flipped_diagonally = Boolean(global_tile_id & FLIPPED_DIAGONALLY_FLAG);

     // Clear the flags
     global_tile_id &= ~(FLIPPED_HORIZONTALLY_FLAG |
        FLIPPED_VERTICALLY_FLAG |
        FLIPPED_DIAGONALLY_FLAG);

    let flags = ParseGIDFlags(flipped_horizontally, flipped_vertically, flipped_diagonally);

    return {
        gid : global_tile_id,
        flipHorizontal : flipped_horizontally,
        flipVertical : flipped_vertically,
        flipDiagonal : flipped_diagonally,
        flipped: flags.flipped,
        rotation : flags.rotation        
    };

}