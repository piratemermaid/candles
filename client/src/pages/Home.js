import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    formatSeasons(sp, su, f, w) {
        let seasons = [];

        if (sp) {
            seasons.push("spring");
        }
        if (su) {
            seasons.push("spring");
        }
        if (f) {
            seasons.push("fall");
        }
        if (w) {
            seasons.push("winter");
        }

        if (seasons.length === 0) {
            return "---";
        } else if (seasons.length === 4) {
            return "all";
        } else {
            return seasons.join(", ");
        }
    }

    render() {
        const { userCandles } = this.props;

        return (
            <div className="container">
                <div className="page-title">
                    <h2>My Candles</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Company</th>
                                <th>Seasons</th>
                                <th>Scent Notes</th>
                                <th>Size</th>
                                <th>Type</th>
                                <th>Strength</th>
                                <th>Throw</th>
                                <th>Scent</th>
                                <th>Score</th>
                                <th>Date</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userCandles.map(
                                ({
                                    name,
                                    company,
                                    spring,
                                    summer,
                                    fall,
                                    winter,
                                    scent_notes,
                                    size,
                                    type,
                                    strength,
                                    throws,
                                    scent,
                                    overall_score,
                                    date_acquired,
                                    notes
                                }) => {
                                    return (
                                        <tr key={`${name}_${company}`}>
                                            <td>{name}</td>
                                            <td>{company}</td>
                                            <td>
                                                {this.formatSeasons(
                                                    spring,
                                                    summer,
                                                    fall,
                                                    winter
                                                )}
                                            </td>
                                            <td>{scent_notes}</td>
                                            <td>{size}</td>
                                            <td>{type}</td>
                                            <td>{strength}</td>
                                            <td>{throws}</td>
                                            <td>{scent}</td>
                                            <td>{overall_score}</td>
                                            <td>{date_acquired}</td>
                                            <td>{notes}</td>
                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default withRouter(Home);
