/**
 * Pose format definitions.
 *
 * Colors and connections are kept compatible with the official OpenPose
 * pose definitions whenever possible.
 *
 * COCO_18 is kept as the default format to preserve the original
 * editor behavior.
 */

export interface PoseFormat {
    name: string;

    keypointNames: string[];

    keypointColors: [number, number, number][];

    keypointConnections: [number, number][];
}

export const COCO18: PoseFormat = {
    name: "COCO18",

    keypointNames: [
        "nose",
        "neck",
        "right_shoulder",
        "right_elbow",
        "right_wrist",
        "left_shoulder",
        "left_elbow",
        "left_wrist",
        "right_hip",
        "right_knee",
        "right_ankle",
        "left_hip",
        "left_knee",
        "left_ankle",
        "right_eye",
        "left_eye",
        "right_ear",
        "left_ear",
    ],

    keypointColors: [
        [255, 0, 0], [255, 85, 0], [255, 170, 0], [255, 255, 0],
        [170, 255, 0], [85, 255, 0], [0, 255, 0], [0, 255, 85],
        [0, 255, 170], [0, 255, 255], [0, 170, 255], [0, 85, 255],
        [0, 0, 255], [85, 0, 255], [170, 0, 255], [255, 0, 255],
        [255, 0, 170], [255, 0, 85]
    ],

    keypointConnections: [
        [0, 1], [1, 2], [2, 3], [3, 4],
        [1, 5], [5, 6], [6, 7], [1, 8],
        [8, 9], [9, 10], [1, 11], [11, 12],
        [12, 13], [0, 14], [14, 16], [0, 15],
        [15, 17],
    ],
};

export const BODY_25: PoseFormat = {
    name: "BODY_25",

    keypointNames: [
        "nose",
        "neck",
        "right_shoulder",
        "right_elbow",
        "right_wrist",
        "left_shoulder",
        "left_elbow",
        "left_wrist",
        "mid_hip",
        "right_hip",
        "right_knee",
        "right_ankle",
        "left_hip",
        "left_knee",
        "left_ankle",
        "right_eye",
        "left_eye",
        "right_ear",
        "left_ear",
        "left_big_toe",
        "left_small_toe",
        "left_heel",
        "right_big_toe",
        "right_small_toe",
        "right_heel",
    ],

    keypointColors: [
        [255, 0, 85],[255, 0, 0],[255, 85, 0],[255, 170, 0],
        [255, 255, 0],[170, 255, 0],[85, 255, 0],[0, 255, 0],
        [255, 0, 0],[0, 255, 85],[0, 255, 170],[0, 255, 255],
        [0, 170, 255],[0, 85, 255],[0, 0, 255],[255, 0, 170],
        [170, 0, 255],[255, 0, 255],[85, 0, 255],[0, 0, 255],
        [0, 0, 255],[0, 0, 255],[0, 255, 255],[0, 255, 255],
        [0, 255, 255],
    ],

    // TODO: Let Openpose.ts determine connection colors from the active pose format.
    keypointConnections: [
        [0,1],[1,2],[2,3],[3,4],
        [1,5],[5,6],[6,7],[1,8],
        [8,9],[9,10],[10,11],[11,22],
        [22,23],[11,24],[8,12],[12,13],
        [13,14],[14,19],[19,20],[14,21],
        [0,15],[15,17],[0,16],[16,18],
    ],
};
