import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, Grid, FormControl, Select, Typography, Divider, TextField, Tooltip } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { setBounds } from "../../../Engine/CONSTRAINTS";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

const menuStyle = {
  style: { marginTop: 5 },
  MenuListProps: {
    style: { paddingTop: 0, paddingBottom: 0 },
  },
  PaperProps: {
    style: {
      border: "1px solid rgba(255, 255, 255, 0.23)",
    },
  },
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "left",
  },
  getContentAnchorEl: null,
};

export default function RetailSettings(props) {
  const { t } = useTranslation();
  // const playerSpec = props.player.getSpec();

  /* ---------------------------------------- Hymnal State ---------------------------------------- */
  const [hymnalValue, setHymnalValue] = useState(props.userSettings.hymnalAllies);

  /* -------------------------------------- Group Value State ------------------------------------- */
  const [groupValue, setgroupValue] = useState(props.userSettings.includeGroupBenefits);

  /* -------------------------------------- Disc Talent State ------------------------------------- */
  // const [discTalent, setDiscTalent] = useState(109964);

  /* -------------------------------------- Auto-Socket State ------------------------------------- */
  const [autoSocketValue, setAutoSocketValue] = useState(props.userSettings.autoSocket);

  const updateHymnal = (value) => {
    props.editSettings("hymnalAllies", setBounds(value, 0, 4));
    setHymnalValue(setBounds(value, 0, 4));
  };

  const updateGroupValue = (value) => {
    props.editSettings("includeGroupBenefits", value);
    setgroupValue(value);
  };

  const updateAutoSocketValue = (value) => {
    props.editSettings("autoSocket", value);
    setAutoSocketValue(value);
  };

  // const options = [
  //   { value: true, label: "Yes" },
  //   { value: false, label: "No" },
  // ];

  /* ----------------------------------------- Free State ----------------------------------------- */
  // const [value3, setValue3] = useState(5);
  /* ----------------------------------------- Free State ----------------------------------------- */
  // const [value4, setValue4] = useState(5);
  /* ----------------------------------------- Free State ----------------------------------------- */
  // const [value5, setValue5] = useState(5);

  return (
    <Grid container spacing={1} direction="row">
      {/* ------------------------- Cabalist's Hymnal Item ------------------------- */}
      {props.hymnalShow === true ? (
        <Grid item xs={12} sm={4} md={4} lg={3} xl={2}>
          <Grid container spacing={0} style={{ padding: "0px 8px" }}>
            <Grid item xs={12}>
              <div style={{ display: "inline-flex" }}>
                <Typography color="primary" style={{ marginRight: 4 }} noWrap>
                  {t("Settings.Retail.Setting0Title")}
                </Typography>
                <Tooltip title={t("Settings.Retail.Setting0Tooltip")} placement="top-start">
                  <InfoOutlinedIcon style={{ height: 15, width: 15 }} fontSize="small" />
                </Tooltip>
              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="AlliesNumber"
                value={hymnalValue}
                onChange={(e) => updateHymnal(e.target.value)}
                variant="outlined"
                size="small"
                type="number"
                fullWidth
                inputProps={{
                  style: { textAlign: "center" },
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
      {/* ------------------------- Group Buff (Treat Buff as Personal Throughput) ------------------------- */}
      {props.groupBuffShow === true ? (
        <Grid item xs={12} sm={4} md={4} lg={3} xl={2}>
          <Grid container spacing={0} style={{ padding: "0px 8px" }}>
            <Grid item xs={12}>
              <div style={{ display: "inline-flex" }}>
                <Typography color="primary" style={{ marginRight: 4 }} noWrap>
                  {t("Settings.Retail.Setting1Title")}
                </Typography>
                <Tooltip title={t("Settings.Retail.Setting1Tooltip")} placement="top-start">
                  <InfoOutlinedIcon style={{ height: 15, width: 15 }} fontSize="small" />
                </Tooltip>
              </div>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" size="small" fullWidth style={{ textAlign: "center" }}>
                <Select labelId="groupValue" value={groupValue} onChange={(e) => updateGroupValue(e.target.value)} MenuProps={menuStyle}>
                  <MenuItem value={true} style={{ justifyContent: "center" }}>
                    {t("Yes")}
                  </MenuItem>
                  <MenuItem value={false} style={{ justifyContent: "center" }}>
                    {t("No")}
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
      {/* ---------------- Discipline Priest Talent selector (Spirit Shell / Evangelism) --------------- */}
      {/* {playerSpec === "Discipline Priest" ? (
              <Grid item xs={12} sm={4} md={4} lg={3} xl={2}>
                <Grid container spacing={1} style={{ padding: "0px 8px" }} >
                  <Grid item xs={12}>
                    <div style={{ display: "inline-flex" }}>
                      <Typography color="primary" style={{ marginRight: 4 }} noWrap>
                        {t("Settings.Retail.Setting2Title")}
                      </Typography>
                      <Tooltip title={t("Settings.Retail.Setting2Tooltip")} placement="top-start">
                        <InfoOutlinedIcon style={{ height: 15, width: 15 }} fontSize="small" />
                      </Tooltip>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl variant="outlined" size="small">
                      <Select labelId="slots" value={discTalent} onChange={(e) => setDiscTalent(e.target.value)} MenuProps={menuStyle}>
                        <MenuItem id="spiritShell" value={109964} style={{ justifyContent: "center" }} >
                          {t("CooldownPlanner.ClassAbilities.109964")}
                        </MenuItem>
                        <MenuItem id="evangelism" value={246287} style={{ justifyContent: "center" }} >
                          {t("CooldownPlanner.ClassAbilities.246287")}
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              ""
            )} */}
      {/* ----------------------------- Discipline Priest Setting Divinder ----------------------------- */}
      {/* {playerSpec === "Discipline Priest" ? <Divider orientation="vertical" flexItem /> : ""} */}
      {/* ----------------------------------------- Auto Socket Items ---------------------------------------- */}
      {props.autoSocket === true ? (
        <Grid item xs={12} sm={4} md={4} lg={3} xl={2}>
          <Grid container spacing={0} style={{ padding: "0px 8px" }}>
            <Grid item xs={12}>
              <div style={{ display: "inline-flex" }}>
                <Typography color="primary" style={{ marginRight: 4 }} noWrap>
                  {t("Settings.Retail.Setting3Title")}
                </Typography>
                <Tooltip title={t("Settings.Retail.Setting3Tooltip")} placement="top-start">
                  <InfoOutlinedIcon style={{ height: 15, width: 15 }} fontSize="small" />
                </Tooltip>
              </div>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" size="small" fullWidth style={{ textAlign: "center" }}>
                <Select labelId="groupValue" value={autoSocketValue} onChange={(e) => updateAutoSocketValue(e.target.value)} MenuProps={menuStyle}>
                  <MenuItem value={true} style={{ justifyContent: "center" }}>
                    {t("Yes")}
                  </MenuItem>
                  <MenuItem value={false} style={{ justifyContent: "center" }}>
                    {t("No")}
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
      {/* ----------------------------------------- Free Option ---------------------------------------- */}
      {/*
            <Grid item xs={12} sm={4} md={4} lg={3} xl={2}>
              <Grid container spacing={1} style={{ padding: "0px 8px" }}>
                <Grid item xs={12}>
                  <Tooltip
                    title={t("Settings.Retail.Setting4Tooltip")}
                    placement="top-start"
                  >
                    <Typography color="primary">
                      {t("Settings.Retail.Setting4Title")}
                    </Typography>
                  </Tooltip>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="AlliesNumber"
                    value={value4}
                    style={{ maxWidth: 75 }}
                    onChange={(e) => setValue4(e.target.value)}
                    variant="outlined"
                    size="small"
                    type="number"
                  />
                </Grid>
              </Grid>
            </Grid>
            */}
      {/* ----------------------------------------- Free Option ---------------------------------------- */}
      {/*
            <Grid item xs={12} sm={4} md={4} lg={3} xl={2}>
              <Grid container spacing={1} style={{ paddingLeft: 8 }}>
                <Grid item xs={12}>
                  <Tooltip
                    title={t("Settings.Retail.Setting5Tooltip")}
                    placement="top-start"
                  >
                    <Typography color="primary">
                      {t("Settings.Retail.Setting5Title")}
                    </Typography>
                  </Tooltip>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="AlliesNumber"
                    value={value5}
                    style={{ maxWidth: 75 }}
                    onChange={(e) => setValue5(e.target.value)}
                    variant="outlined"
                    size="small"
                    type="number"
                  />
                </Grid>
              </Grid>
            </Grid> */}
    </Grid>
  );
}